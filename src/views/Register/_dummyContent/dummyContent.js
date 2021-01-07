import adIcon from "@iconify/icons-ic/round-alternate-email";
import lockIcon from "@iconify/icons-clarity/lock-solid";
import userIcon from "@iconify/icons-clarity/user-solid";
import logoutIcon from "@iconify/icons-clarity/logout-solid";
import routes from "@routes";
import backgroundImg from "./images/background.png";

export default {
  title: "Stwórz swoje konto",
  pageTitle: "Rejestracja",
  subtitle: "Posiadając konto zyskujesz jeszcze więcej możliwości",
  inputs: [
    { name: "name", label: "Imię", icon: userIcon },
    { name: "surname", label: "Nazwisko", icon: userIcon },
    { name: "email", label: "Adres e-mail", icon: adIcon },
    { name: "password", label: "Hasło", icon: lockIcon, type: "password" },
  ],
  slideControls: [
    {
      name: "accept_regulations",
      label: "Akceptuję<regulamin>sklepu internetowego",
      fontWeight: 400,
      link: "/regulamin",
    },
    {
      name: "newsletter",
      label:
        "Chcę zostać zapisany do listy newsletter i korzystać ze specjalnych promocji.<Więcej>",
      fontWeight: 400,
      link: "/newsletter",
    },
  ],
  button: {
    text: "Utwórz konto",
    icon: logoutIcon,
  },
  information: {
    text: "Jesteś już zarejestowany?<Zaloguj się>",
    link: routes.login,
  },
  background: backgroundImg,
  backLink: routes.login,
  minHeight: 920,
};
