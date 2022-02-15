import { useEffect } from "react";
import React, { useRef } from "react";
import { BindOptions, KeyBindOptions, KeyCodes } from "../../types/keyTypes";

function useGlobalKeyBind({ options }: BindOptions) {
  const isPressed = useRef<Record<string, boolean>>({});

  const activeKey = useRef<KeyBindOptions>();

  function keydown(e: KeyboardEvent) {
    if (["Control", "Shift", "Alt"].indexOf(e.key) > -1) {
      return;
    }
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
      // debugger;
      let spKeyPressed =
        (e.altKey || e.ctrlKey || e.shiftKey) && !!option.specialKey;

      let spkyflag = e.altKey || e.ctrlKey || e.shiftKey;

      if (pressed && option.specialKey) {
        if (option.specialKey === "Alt") {
          if (!e.altKey || e.ctrlKey || e.shiftKey) spKeyPressed = false;
        }
        if (option.specialKey === "Control") {
          if (!e.ctrlKey || e.altKey || e.shiftKey) spKeyPressed = false;
        }
        if (option.specialKey === "Shift") {
          if (!e.shiftKey || e.ctrlKey || e.altKey) spKeyPressed = false;
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
            // console.log(isPressed);
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
    if (["Control", "Shift", "Alt"].indexOf(e.code) > -1) {
      return;
    }
    if (isPressed.current["" + e.which]) {
      if (activeKey.current) {
        activeKey.current = null as any;
      }
      delete isPressed.current["" + e.which];
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
