import * as GrIcons from "react-icons/gr";
import * as VsIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";


export const chatLinks = [
    {
        href: '/dashboard/overview',
        title: 'Overview',
        icon: <IoIcons.IoStatsChart/>
    },
    {
        href: '/dashboard/tasks',
        title: 'Tasks',
        icon: <BsIcons.BsListTask/>
    },
    // {
    //     href: '/dashboard/calender',
    //     title: 'Calender',
    //     icon: <BsIcons.BsCalendar2Check/>
    // },
    // {
    //     href: '/dashboard/settings',
    //     title: 'Settings',
    //     icon: <RiIcons.RiSettingsLine/>
    // },
    
];

export const socials = [
    {
        icon: <FaIcons.FaTwitter />,
        href: ''
    },
    {
        icon: <FaIcons.FaTelegram />,
        href: ''
    },
    {
        icon: <FaIcons.FaDiscord />,
        href: ''
    }
];

export const nav = [
    {
        name: 'Tools',
        href: ''
    },
    {
        name: 'Docs',
        href: ''
    }
]