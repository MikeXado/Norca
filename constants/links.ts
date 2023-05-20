import BdIcon from "../assets/sidebar/bd-link-icon.svg?url";
import IndividualIcon from "../assets/sidebar/individual-link-icon.svg?url";
import LegalPersonIcon from "../assets/sidebar/legal-person-link-icon.svg?url";
import MovePropertyIcon from "../assets/sidebar/move-property-link-icon.svg?url";
import ImmovePropertyIcon from "../assets/sidebar/immove-property-link-icon.svg?url";
import DocumentTypeIcon from "../assets/sidebar/document-type-link-icon.svg?url";
import IndexListIcon from "../assets/sidebar/index-list-link-icon.svg?url";
import BlankIcon from "../assets/sidebar/blank.svg?url";
import ListCardIcon from "../assets/sidebar/list-cards-link-icon.svg?url";

export const menuItems = [
  {
    title: "Baze de Date",
    icon: BdIcon,
    path: "/bd-link",
    submenu: [
      {
        title: "Persoane Fizice",
        icon: IndividualIcon,
        path: "/individuals/123456789",
      },
      {
        title: "Persoane Juridice",
        icon: LegalPersonIcon,
        path: "#",
      },
      {
        title: "Bunuri mobile",
        icon: MovePropertyIcon,
        path: "#",
      },
      {
        title: "Bunuri imobile",
        icon: ImmovePropertyIcon,
        path: "#",
      },
      {
        title: "Tipurile actelor și acțiunilor notariale",
        icon: DocumentTypeIcon,
        path: "#",
      },
      {
        title: "Lista indicilor de suspiciune în domeniul PC SB/FT",
        icon: IndexListIcon,
        path: "#",
      },
      {
        title: "Lista țărilor lumii",
        icon: BlankIcon,
        path: "#",
      },
      {
        title: "Lista codurilor valutelor",
        icon: ListCardIcon,
        path: "#",
      },
      {
        title: "Registrare",
        icon: BdIcon,
        path: "#",
      },
      {
        title: "Rapoarte",
        icon: BlankIcon,
        path: "#",
      },
    ],
  },
];
