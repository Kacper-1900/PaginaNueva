import React from "react";
import "./Footer.css";
import Maps from "../maps/Maps";

function Footer() {
    return (
        <footer className="footer">

            {/* NUEVA ZONA SUPERIOR */}
            <div className="footer-top">

                {/* EMPRESA */}
                <div className="footer-company">
                    <h3>Empresa</h3>
                    <p>Eventos</p>
                    <p>Clientes</p>
                    <p>Servicios</p>
                    <p>Blog</p>
                </div>

                {/* MAPA */}
                <div className="footer-map">
                    <h3>Nuestra Ubicación</h3>
                    <Maps />
                </div>
                
                {/* CONTACTO */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>PicturesKacper Studio</p>
                    <p>Madrid, España</p>
                    <p>+34 600 000 000</p>
                    <p>info@pictureskacper.com</p>
                </div>

            </div>

            {/* TU FOOTER ORIGINAL */}
            <div className="footer-legal">
                © 2026 PicturesKacper. Todos los derechos reservados.
                <a href="/privacy"> Política de Privacidad y Cookies</a> |
                <a href="/terms"> Condiciones de Venta</a>
            </div>

            <div className="footer-social">
                <div className="social-item">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src="/instagram.png" alt="Instagram" />
                    </a>
                </div>

                <div className="social-item">
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src="/twitter.png" alt="Twitter" />
                    </a>
                </div>

                <div className="social-item">
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                        <img src="/tiktok.png" alt="TikTok" />
                    </a>
                </div>
            </div>

            <div className="footer-links">
                <a href="https://github.com/Kacper-1900/PaginaNueva" target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>

        </footer>
    );
}

export default Footer;
