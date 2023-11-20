import style from "../home.module.scss";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Tentang(sectionName) {
  return (
    <section className="page_container" id={sectionName}>
      <div className={style.about_container}>
        <div className={style.top_area}>
          <h2>Tentang</h2>
          <a href="/tentang" className={style.more_button}>
            <p>Lebih lanjut</p>
            <ArrowOutwardIcon />
          </a>
        </div>
        <div className={style.content_area}>
          <h1>
            LAERE ID Merupakan perusahaan teknologi di bawah naungan{" "}
            <b>PT. Tumbuh Nusa Tech</b> yang berfokus pada pembuatan
            produk-produk teknologi seperti landing page, website, dashboard,
            dan mobile app. Kami hadir sebagai solusi pengembangan teknologi
            yang dapat menyesuaikan kebutuhan anda.
          </h1>
        </div>
        <div className={style.top_area}>
          <h2>Tentang</h2>
          <a href="/tentang" className={style.more_button}>
            <p>Lebih lanjut</p>
            <ArrowOutwardIcon />
          </a>
        </div>
        <div className={style.content_area}>
          <h1>
            LAERE ID Merupakan perusahaan teknologi di bawah naungan{" "}
            <b>PT. Tumbuh Nusa Tech</b> yang berfokus pada pembuatan
            produk-produk teknologi seperti landing page, website, dashboard,
            dan mobile app. Kami hadir sebagai solusi pengembangan teknologi
            yang dapat menyesuaikan kebutuhan anda.
          </h1>
        </div>
      </div>
    </section>
  );
}
