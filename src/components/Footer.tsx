import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <span className={styles.logoMain}>World</span>
          <span className={styles.logoAccent}>Travel</span>
        </div>
        <p className={styles.tagline}>
          Viajamos contigo desde Valencia al mundo entero.
          <br />
          Circuitos en grupo, a medida y experiencias únicas.
        </p>
        {/* <div className={styles.social}>
          <a href="#" aria-label="Instagram" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div> */}
      </div>

      <div className={styles.links}>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Destinos</h4>
          <ul>
            <li>
              <a href="#">Europa</a>
            </li>
            <li>
              <a href="#">Asia</a>
            </li>
            <li>
              <a href="#">África</a>
            </li>
            <li>
              <a href="#">América</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Tipos de viaje</h4>
          <ul>
            <li>
              <a href="#">Circuitos en grupo</a>
            </li>
            <li>
              <a href="#">Viajes a medida</a>
            </li>
            <li>
              <a href="#">Cupos especiales</a>
            </li>
            <li>
              <a href="#">Fin de año</a>
            </li>
          </ul>
        </div>
        {/* <div className={styles.col}>
          <h4 className={styles.colTitle}>Agencia</h4>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
          </ul>
        </div> */}
      </div>
    </div>

    <div className={styles.bottom}>
      <span>© 2026 WorldTravel · Todos los derechos reservados</span>
      <div className={styles.legal}>
        <a href="#">Aviso legal</a>
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
