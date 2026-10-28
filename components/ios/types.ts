export type IOSAppId =
  | "safari"
  | "notes"
  | "photos"
  | "settings"
  | "mail"
  | "files"
  | "phone"
  | "skills"
  | "translate"
  | "web";

export interface IOSAppMeta {
  id: IOSAppId;
  name: { tr: string; en: string };
  iconType:
    | "safari"
    | "notes"
    | "photos"
    | "settings"
    | "mail"
    | "files"
    | "phone"
    | "skills"
    | "translate"
    | "web"
    | "github"
    | "linkedin";
  isExternal?: boolean;
  externalUrl?: string;
  badge?: number | string;
}

export type WallpaperId = "ios18" | "aurora" | "cyber" | "sunset";

export interface WallpaperOption {
  id: WallpaperId;
  name: { tr: string; en: string };
  className: string;
  previewBg: string;
}
