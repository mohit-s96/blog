import { useEffect } from "react";
import React, { useRef } from "react";
import {
  BindOptions,
  KeyBindOptions,
  KeyCodes,
  SpecialKeyTypes,
} from "../../types/keyTypes";

const specialKeys: SpecialKeyTypes[] = ["Alt", "Control", "Shift", "Meta"];

function useGlobalKeyBind({ options }: BindOptions) {
  const isPressed = useRef<Record<string, boolean>>({});

  const activeKey = useRef<KeyBindOptions>();

  function keydown(e: KeyboardEvent) {
    if (specialKeys.indexOf(e.key as SpecialKeyTypes) > -1) {
      return;
    }
    // dont't jack the default shortcuts TODO: add more here?
    if (e.ctrlKey && e.shiftKey && e.code === "KeyJ") {
      return;
    }
    if (!isPressed.current["" + e.which]) {
      isPressed.current["" + e.which] = true;
    }

    options.forEach((option) => {
      let pressed = true;
      option.keys.forEach((key) => {
        const keyWhich = "" + KeyCodes[key];
        if (!isPressed.current[keyWhich]) pressed = false;
      });
      let spKeyPressed =
        (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) &&
        !!option.specialKey;

      let spkyflag = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;

      if (pressed && option.specialKey) {
        if (option.specialKey === "Alt") {
          if (!e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)
            spKeyPressed = false;
        }
        if (option.specialKey === "Control") {
          if (!e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)
            spKeyPressed = false;
        }
        if (option.specialKey === "Shift") {
          if (!e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)
            spKeyPressed = false;
        }
        if (option.specialKey === "Meta") {
          if (!e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
            spKeyPressed = false;
        }
      }

      if (
        (pressed && spKeyPressed) ||
        (pressed && !option.specialKey && !spkyflag)
      ) {
        if (!activeKey.current) {
          e.preventDefault();
          option.callback();
          activeKey.current = option;
        } else {
          if (activeKey.current === option && option.longPress) {
            if (Object.keys(isPressed.current).length === option.keys.length) {
              e.preventDefault();
              option.callback();
            }
          }
        }
      }
    });
  }

  function keyup(e: KeyboardEvent) {
    e.preventDefault();
    /**
     * On MacOS the `KeyUp` event isn't fired for a key if the `Meta` key was also pressed (KeyUp will only be fired for Meta key).
     * Thus to reset the pressed cache correctly we will unset any pressed keys after a `KeyUp` event on `Meta`.
     *
     * @see {https://stackoverflow.com/questions/73412298/keyup-event-not-firing-when-meta-key-is-held-mac-osx-only-how-to-handle-in}
     */
    if (
      specialKeys
        .filter((k) => k !== "Meta")
        .indexOf(e.key as SpecialKeyTypes) > -1
    ) {
      return;
    }
    if (e.key === "Meta") {
      isPressed.current = {};
      activeKey.current = null as any;
    } else {
      if (isPressed.current["" + e.which]) {
        if (activeKey.current) {
          activeKey.current = null as any;
        }
        delete isPressed.current["" + e.which];
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);

    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, [options]);
}

export default useGlobalKeyBind;
