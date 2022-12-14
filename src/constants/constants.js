import { FaStoreAlt } from "react-icons/fa";
import { BiLaugh } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";

export const projects = [
  {
    title: "NFT Marketplace",
    description:
      "Marketplace to mint, buy, sell and stake NFT's using custom token (LUNGO Token)",
    tags: ["Angular 13", "Truffle", "Ganache", "Solidity"],
    source: "https://github.com/nahuegallinoti/lungo-token-nft",
    visit: "https://google.com",
    id: 0,
    icon: <FaStoreAlt size="30%" />,
  },
  {
    title: "Booking System",
    description:
      "Booking system for hotel, reservation management and tracking of consumption during the stay",
    tags: ["Angular 11", "Angular Material", "Firebase"],
    source: "https://github.com/nahuegallinoti/reservas-app",
    visit: "https://tesis-a16ed.firebaseapp.com/",
    id: 1,
    icon: <RiComputerLine size="30%" />,

  },
  {
    title: "Booking Portal",
    description:
      "Portal for booking hotel rooms and services, with a simple and intuitive interface",
    tags: ["Angular 11", "Angular Material", "Firebase"],
    source: "https://github.com/nahuegallinoti/portal-reservas",
    visit: "https://portal-reservas.web.app/",
    id: 2,
    icon: <GiAirplaneDeparture size="30%" />,

  },
  {
    title: "Giphy App",
    description: "Web application to search GIFs",
    tags: ["React"],
    source: "https://github.com/nahuegallinoti/giphy-react-app",
    visit: "https://giphy-app-react-hooks.herokuapp.com/",
    id: 3,
    icon: <BiLaugh size="30%" />,

  },
  {
    title: "ChatApp",
    description: "Chat app",
    tags: ["React", "Socket.io", "Node.js"],
    source: "https://github.com/nahuegallinoti/chatApp",
    visit: "https://react-socketio-express-chat.herokuapp.com/",
    id: 4,
    icon: <BsFillChatDotsFill size="30%" />,

  },
  {
    title: "Posts App",
    description: "App to make posts",
    tags: ["React", "Node.js", "Express", "TailwindCss", ""],
    source: "https://github.com/nahuegallinoti/MERN-stack-posts",
    visit: "https://mern-stack-nagu.herokuapp.com/",
    id: 5,
    icon: <BiNews size="30%" />,

  },
  {
    title: "Portfolio",
    description: "Personal portfolio website",
    tags: ["Next.js"],
    source: "https://github.com/nahuegallinoti/portfolio",
    visit: "https://portfolio-nahuel.herokuapp.com/",
    id: 6,
    icon: <BsPersonBoundingBox size="30%" />,

  },
];

export const TimeLineData = [
  { year: 2016, text: "QA Functional in IOT Project" },
  { year: 2017, text: "QA Leader for Fintech Project" },
  { year: "2018-Actually", text: "Fullstack Web Developer" },
];
