import style from "../home.module.scss";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Tentang(sectionName) {
  return (
    <section className="page_container" id={sectionName}>
      <div className={style.about_container}>
        <div className={style.top_area}>
          <Image
            src="/laere-logo.svg"
            alt="laere-logo"
            width={40}
            height={40}
          />
          <a>
            Lebih lanjut
            <span>
              <ArrowOutwardIcon />
            </span>
          </a>
        </div>
        <div className={style.content_area}>
          <h1>
            Kami adalah perusahaan penyedia Desain Webstie dan pembuatan
            Aplikasi. Bagi kami setiap perusahaan memiliki wajahnya
            masing-masing, karena digitalisasi bebas tanpa batas.
          </h1>
        </div>
      </div>
    </section>
  );
}
