import Navlink from "./Navlink"
import style from "./layout.module.scss"


export default function Header() {
    const navs = [
        { target: "/", title: "Home" },
        { target: "/about", title: "About" },
        { target: "/connect", title: "Connect" }
    ]

    return (
        <header className={style.navbar}>
            <ul className={style.nav}>
                {navs.map((nav, index) => (
                    <Navlink key={index} href={nav.target} title={nav.title} />
                ))}
            </ul>
        </header>
    )
}
