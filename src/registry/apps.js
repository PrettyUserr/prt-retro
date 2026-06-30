import About from "../apps/About/About";
import Projects from "../apps/Projects/Projects";
import Resume from "../apps/Resume/Resume";
import Contact from "../apps/Contact/Contact";
import Gallery from "../apps/Gallery/Gallery";
import Terminal from "../apps/Terminal/Terminal";

const apps = [
    {
        id: "about",
        title: "About",
        icon: "/assets/icons/desktop/About.svg",
        component: About,
    },
    {
        id: "projects",
        title: "Projects",
        icon: "/assets/icons/desktop/Projects.svg",
        component: Projects,
    },
    {
        id: "resume",
        title: "Resume",
        icon: "/assets/icons/desktop/Resume.svg",
        component: Resume,
    },
    {
        id: "contact",
        title: "Contact",
        icon: "/assets/icons/desktop/Contact.svg",
        component: Contact,
    },
    {
        id: "gallery",
        title: "Gallery",
        icon: "/assets/icons/desktop/Gallery.svg",
        component: Gallery,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: "/assets/icons/desktop/Terminal.svg",
        component: Terminal,
    },
];

export default apps;