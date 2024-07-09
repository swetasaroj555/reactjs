import { MdAddHomeWork } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";

export const LEFT_SIDEBAR_LINKS =[
    {
        id:1,
        title:"Home",
        href:"/",
         icon :<MdAddHomeWork  size={26}/>,

    },
    {
        id:2,
        title:"Search",
        href:"/search",
        icon:<FaSearch  size={26}/>,
     },
    {
        id:3,
        title:"Explore",
        href:"/explore",
     icon:<MdOutlineTravelExplore  size={26}/>
    },
    {
        id:4,
        title:"Notification",
        href:"/notification",
       icon: <MdNotificationsActive  size={26} />


    },
    {
        id:5,
        title: "Messages",
        href:"message",
        icon:<FaFacebookMessenger size={26} />  


    },
    {
        id:"6",
        title:"Profile",
        href:"/profile",
        icon:<img src="https://avatar.iran.liara.run/public/38" height={30} width={30} alt="Avatar"/>

    }
    

]