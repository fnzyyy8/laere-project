import style from "../home.module.css"
export default function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.content_hero}>
                <div className={style.tagline}>
                    <h1>Digitalisasi</h1>
                    <h1>Tanpa Batasan</h1>
                </div>
                <p>Percayakan persona utama perusahaan anda bersama kami. Laere digitalisasi bebas tanpa batas.</p>
            </div>


        </section>
    )
}
