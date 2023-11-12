import { FaRegFolderOpen } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { TbTimeline } from 'react-icons/tb';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const linksData = [
    {
        id: 1,
        linkTo: "/",
        navIcon: <AiOutlineHome />,
        navText: "Home",
    },
    {
        id: 2,
        linkTo: "/about",
        navIcon: <BsFillInfoCircleFill />,
        navText: "About",
    },
    {
        id: 3,
        linkTo: "/experience",
        navIcon: <TbTimeline />,
        navText: "Experience",
    },
    {
        id: 4,
        linkTo: "/services",
        navIcon: <MdOutlineMiscellaneousServices />,
        navText: "Services",
    },
    {
        id: 5,
        linkTo: "/projects",
        navIcon: <FaRegFolderOpen />,
        navText: "Projects",
    },
    {
        id: 6,
        linkTo: "/contact",
        navIcon: <TiContacts />,
        navText: "Contact",
    }
]