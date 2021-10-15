export type DeviceTypes = "mobile" | "ipad" | "regular";
export type LayoutType = "horiz" | "vert";
export type ThemeType = "light" | "dark";
export type SizeVariantType = "sm" | "md";

export type SupaUploadResponseType = {
  data: {
    Key: string;
  } | null;
  error: Error | null;
};
