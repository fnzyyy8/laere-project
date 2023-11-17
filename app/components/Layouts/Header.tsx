import Link from "next/link"
import style from "./layout.module.css"
export default function Header() {
    return (
        <header className={style.navbar}>
            <ul className={style.navbar_nav}>
                <li><Link href="/">Tentang</Link></li>
                <li><Link href="/">Portofolio</Link></li>
                <li><Link href="/">Terkonesi</Link></li>
            </ul>
        </header>
    )
}
