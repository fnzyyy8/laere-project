'use client'
import style from "../home.module.scss"
import { TypeAnimation } from 'react-type-animation';
export default function Hero(sectionName: any) {
    return (
        <section className="page_container" id={sectionName}>
            <div className={style.hero_container}>
                <div className={style.hero_content}>
                    <div className={style.tagline}>
                        <h1>
                            <span>Digitalisasi </span>
                        </h1>
                        <h1>
                            <span><TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Dengan Mudah',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Tanpa Batasan',
                                    1000,
                                    'Hanya Laere.id',
                                    5000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '3.75rem', display: 'inline-block' }}
                                repeat={Infinity}
                            /></span>
                        </h1>

                    </div>
                    <div className={style.text}>
                        <p>
                            <span>
                                Percayakan teknologi anda kepada kami
                            </span>
                        </p>
                    </div>
                    <button className={style.btn_connect}>Hubungi kami</button>
                </div>

            </div>
        </section>
    )
}
