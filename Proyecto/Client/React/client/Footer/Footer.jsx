import { Link } from "react-router-dom";
import { BRAND_LINKS, BRAND_WHATSAPP_URL } from "../config/brandLinks";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="site-footer__inner">
        <section className="site-footer__brand" aria-label="Marca">
          <Link className="site-footer__logo" to="/" id="site-footer-title">
            #HARTA
          </Link>
          <p>Cerámica de diseño con identidad propia.</p>
        </section>

        <section className="site-footer__section" aria-label="Redes sociales">
          <h2>Redes</h2>
          <ul>
            <li>
              <a
                href={BRAND_LINKS.instagramBrand}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram de la marca #HARTA en una nueva pestaña"
              >
                Instagram #HARTA
              </a>
            </li>
            <li>
              <a
                href={BRAND_LINKS.instagramOwner}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram de la dueña de #HARTA en una nueva pestaña"
              >
                Instagram dueña
              </a>
            </li>
          </ul>
        </section>

        <section className="site-footer__section site-footer__contact" aria-label="Contacto">
          <h2>Contacto</h2>
          <ul>
            <li>
              <a
                className="site-footer__whatsapp"
                href={BRAND_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por WhatsApp sobre un producto de #HARTA en una nueva pestaña"
              >
                WhatsApp consultas
              </a>
            </li>
            <li>
              <a href={BRAND_LINKS.email} aria-label="Enviar email a #HARTA">
                contacto@harta.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 #HARTA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
