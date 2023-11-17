"use client"
import Navlink from "./Navlink"
import style from "./layout.module.scss"
import Image from "next/image"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Header() {
    const navs = [
        { target: "#about", title: "Tentang" },
        { target: "#portofolio", title: "Portofolio" },
        { target: "#connect", title: "Hubungkan" }
    ]

    const [openNav, setOpenNav] = useState(false);
    const [openLang, setOpenLang] = useState(false);

    const toggleOpenNav = () => {
        setOpenNav(!openNav)
    }

    const toggleOpenLang = () => {
        setOpenLang(!openLang)

    }

    return (
        <header className={style.navbar}>
            <div className={style.nav}>
                <div><Image src="/laere-logo.svg" width={40} height={40} alt="laere-logo" /></div>
                <ul className={`${style.nav_menu} ${openNav ? style.nav_menu_open : style.nav_menu_close} `}>
                    {navs.map((nav, index) => (
                        <Navlink key={index} href={nav.target} title={nav.title} />
                    ))}
                    <li className={style.dropdown_lang} onClick={toggleOpenLang}><a>Id <span>{openLang ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span></a></li>
                    <ul className={`${style.dropdown_menu_lang} ${openLang ? style.dropdown_menu_lang_open : style.dropdown_menu_lang_close}`}>
                        <hr />
                        <li>id</li>
                        <li>En</li>
                    </ul>
                </ul>
                <div className={style.nav_dropdown_lang}>
                    <button onClick={toggleOpenLang}>Id <span>{openLang ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span></button>
                    <div className={openLang ? style.nav_menu_lang : "hidden"}>
                        <ul>
                            <li>Id</li>
                            <li>En</li>
                        </ul>

                    </div>
                </div>
                <div className={style.nav_menuIcon}>
                    <button onClick={toggleOpenNav}>
                        <span>{openNav ? <CloseIcon /> : <MenuIcon />}</span>
                    </button>
                </div>
            </div>
        </header >
    )
}
