import style from "./layout.module.css";
export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className={style.footer}>
      <p>&copy; {year} Laere Project - all right reserved </p>
    </footer>
  );
}
