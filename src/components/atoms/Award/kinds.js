import certificateIcon from "@iconify/icons-clarity/certificate-line";
import tagIcon from "@iconify/icons-clarity/tags-line";
import treeIcon from "@iconify/icons-clarity/tree-line";
import accessibilityIcon from "@iconify/icons-clarity/accessibility-1-line";
import piggyIcon from "@iconify/icons-clarity/piggy-bank-line";

export const kinds = [
  "recommendable",
  "bestseller",
  "envFriendly",
  "a11yAdapted",
  "valueForMoney",
];

export default {
  [kinds[0]]: {
    icon: certificateIcon,
    color: "#402C72",
    text: "Godny polecenia",
  },
  [kinds[1]]: {
    icon: tagIcon,
    color: "#B5AF2E",
    text: "Bestseller",
  },
  [kinds[2]]: {
    icon: treeIcon,
    color: "#34AC4F",
    text: "Przyjazny dla środowiska",
  },
  [kinds[3]]: {
    icon: accessibilityIcon,
    color: "#A8368F",
    text: "Dostosowany dla osób niepełnosprawnych",
  },
  [kinds[4]]: {
    icon: piggyIcon,
    color: "#1A5EC6",
    text: "Stosunek jakości do ceny",
  },
};
