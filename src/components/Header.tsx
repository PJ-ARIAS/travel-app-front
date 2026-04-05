import React from "react";
import styles from "./Header.module.css";

interface Props {
  onLogoClick: () => void;
}

const Header: React.FC<Props> = ({ onLogoClick }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <button className={styles.logo} onClick={onLogoClick}>
        <span className={styles.logoMain}>World</span>
        <span className={styles.logoAccent}>Travel</span>
      </button>
      <nav className={styles.nav}>
        <a href="#" onClick={onLogoClick}>Inicio</a>
        <a href="#">Circuitos</a>
        <a href="#">Ofertas</a>
        <a href="#">Nosotros</a>
        <a href="#" className={styles.ctaBtn}>Contacto</a>
      </nav>
    </div>
  </header>
);

export default Header;
