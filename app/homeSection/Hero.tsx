import style from "../home.module.scss"
export default function Hero() {
    return (
        <section className={style.hero_container}>
            <div className={style.content}>
                <div className={style.tagline}>
                    <h1>Digitalisasi</h1>
                    <h1>Tanpa Batasan</h1>
                </div>
                <div className={style.content}></div>
                <p>Percayakan persona utama perusahaan anda bersama kami. Laere digitalisasi bebas tanpa batas.</p>
            </div>


        </section>
    )
}
