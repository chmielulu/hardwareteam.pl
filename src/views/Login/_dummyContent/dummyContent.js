import adIcon from "@iconify/icons-ic/round-alternate-email";
import lockIcon from "@iconify/icons-clarity/lock-solid";
import routes from "@routes";
import backgroundImg from "./images/background.png";

export default {
  title: "Witaj z powrotem",
  pageTitle: "Logowanie",
  subtitle: "Zaloguj się za pomocą swojego e-maila i hasła",
  inputs: [
    { name: "email", label: "Adres e-mail", icon: adIcon },
    { name: "password", label: "Hasło", icon: lockIcon, type: "password" },
  ],
  slideControls: [
    { name: "remember_password", label: "Zapamiętaj mnie", fontWeight: 500 },
  ],
  button: {
    text: "Zaloguj się",
    icon: lockIcon,
  },
  information: {
    text: "Nie masz jeszcze założonego konta?<Zarejestruj się>",
    link: routes.register,
  },
  background: backgroundImg,
  backLink: routes.index,
};
