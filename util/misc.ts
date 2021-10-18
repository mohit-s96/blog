import { DeviceTypes, LayoutType } from "../types/globalTypes";

export function resolveLayouts(
  deviceType: DeviceTypes,
  layoutType: LayoutType
) {
  let str =
    "flex relative mb-4 mx-3 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl";
  if (deviceType === "mobile" || deviceType === "ipad") {
    str += " w-full mt-8";
    str += deviceType === "mobile" ? " flex-col" : "";
  } else if (layoutType === "horiz") {
    str += " w-full";
  } else {
    str += " responsive-card flex-col";
  }

  return str;
}
