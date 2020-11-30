import facebookIcon from "@iconify/icons-logos/facebook";
import googleIcon from "@iconify/icons-logos/google-icon";
import facebookSecondIcon from "@iconify/icons-bx/bxl-facebook";
import twitterIcon from "@iconify/icons-bx/bxl-twitter";

export const kinds = ["facebook", "google", "twitter"];

export default {
  [kinds[0]]: {
    icon: facebookIcon,
    secondIcon: facebookSecondIcon,
    text: "Facebook",
    color: "#4267B2",
  },
  [kinds[1]]: {
    icon: googleIcon,
    text: "Google",
  },
  [kinds[2]]: {
    icon: twitterIcon,
    text: "Twitter",
    color: "#1DA1F2",
  },
};
