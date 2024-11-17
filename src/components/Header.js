import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
function Header(){
    const [showMenu, setshowMenu] = useState("md:hidden");
    const menuItems = [
        {
            title : 'Home',
            key: '/',
        },
        {
            title : 'Projects',
            key: '/projects',
        },
        {
            title : 'Blogs',
            key: '/blogs',
        },
        {
            title : 'Contact',
            key: '/contact',
        }
    ]
   const path = window.location.pathname;
    return (
        <div className ='text-theme2 font-mont fixed  top-0 left-0 right-0 z-50'>
        <div className={`flex bg-theme justify-between items-center p-3 shadow-lg ${showMenu === '' && 'md:flex-col'}`}>
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-semibold">Stalin.S</h1>
                <FaBarsStaggered 
                 onClick={() => {
                    if(showMenu === "md:hidden")
                    {
                        setshowMenu('');
                    }else{
                        setshowMenu("md:hidden");
                    }
                }}
                className ="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer" />
            </div>
            <div className="flex md:hidden ">
                {menuItems.map( (item) => {
                    return (<li className={`list-none px-5 p-1 ${item.key === path && `bg-themehover text-themetext rounded-md`}`}>
                        <Link to={`${item.key}`}><b>{item.title}</b></Link>
                    </li>);
                    })}
            </div>

            <div className={`mt-5 md:flex items-start flex-col w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
                {menuItems.map( (item) => {
                    return (<li className={`list-none px-5 p-1 ${item.key === path && `bg-themehover text-themetext rounded-md`}`}>
                        <Link to={`${item.key}`}>{item.title}</Link>
                    </li>);
                    })}
            </div>
        </div>
        </div>
    )

}

export default Header;