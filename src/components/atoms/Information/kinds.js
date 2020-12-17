import clockIcon from "@iconify/icons-clarity/clock-line";
import truckIcon from "@iconify/icons-clarity/truck-line";
import coinBagIcon from "@iconify/icons-clarity/coin-bag-line";

export const kinds = ["time", "delivery", "instalments"];

export default {
  [kinds[0]]: {
    icon: clockIcon,
    text: "U ciebie już jutro",
  },
  [kinds[1]]: {
    icon: truckIcon,
    text: "Dostawa gratis",
  },
  [kinds[2]]: {
    icon: coinBagIcon,
    text: "Rata tylko ",
  },
};
