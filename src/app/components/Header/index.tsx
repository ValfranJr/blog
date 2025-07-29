import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h2>Blog News</h2>
      </Link>
      <nav className={styles.header_nav}>
        <Link href="/">Home</Link>
        <Link href="/artigos">Artigos</Link>
      </nav>
    </div>
  );
};

export default Header;
