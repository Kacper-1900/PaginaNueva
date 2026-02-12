import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-legal">
                © 2026 PicturesKacper. Todos los derechos reservados.                
                <a href="/privacy">Política de Privacidad y Cookies</a> |
                <a href="/terms">Condiciones de Venta</a>
            </div>

            <div className="footer-social">

                <div className="social-item">
                    <spam>Instagram</spam>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" />
                    </a>
                </div>

                <div className="social-item">
                    <spam>Twitter</spam>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src="/icons/twitter.svg" alt="Twitter" />
                    </a>
                </div>
            </div>


            <div className="footer-links">
                <a href="https://github.com/26Saul/RealShoes/tree/develop" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="https://www.figma.com/file/tu-proyecto" target="_blank" rel="noreferrer">
                    Figma
                </a>
                <a href="/">Inicio</a>
            </div>
        </footer>
    );
}
export default Footer;

