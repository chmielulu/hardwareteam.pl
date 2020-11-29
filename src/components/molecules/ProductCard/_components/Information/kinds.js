import clockIcon from "@iconify/icons-clarity/clock-line";
import truckIcon from "@iconify/icons-clarity/truck-line";

export const kinds = ["time", "delivery"];

export default {
  [kinds[0]]: {
    icon: clockIcon,
    text: "U ciebie już jutro",
  },
  [kinds[1]]: {
    icon: truckIcon,
    text: "Dostawa gratis",
  },
};
