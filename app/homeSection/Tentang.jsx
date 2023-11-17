import style from "../home.module.scss";

export default function Tentang(sectionName) {
  return (
    <section className={style.tentang_container} id={sectionName}>
      <div className={style.container}>
        <h1>
          Kami adalah perusahaan penyedia Desain Webstie dan pembuatan Aplikasi.
          Bagi kami setiap perusahaan memiliki wajahnya masing-masing, karena
          digitalisasi bebas tanpa batas.
        </h1>
      </div>
      <div className={style.container}>
        <button>Lebih lanjut</button>
      </div>
    </section>
  );
}
