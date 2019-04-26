import { GatewaysEnum } from "../../types/globalTypes";

import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 8;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: GatewaysEnum.BRAINTREE,
  DUMMY: GatewaysEnum.DUMMY
};
export const STATIC_PAGES = [
  {
    label: "Giới thiệu",
    url: generatePageUrl("about")
  }
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/ngothuystudio",
    path: require("../images/facebook-icon.svg")
  },
  {
    ariaLabel: "youtube",
    href: "https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g/videos",
    path: require("../images/youtube-icon.svg")
  }
];
export const META_DEFAULTS = {
  custom: [],
  description: "Noodless PWA Storefront",

  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Noodless",
  type: "website",
  url: window.location.origin
};
