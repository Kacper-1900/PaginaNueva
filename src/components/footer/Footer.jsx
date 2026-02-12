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
                        <img src="/public/instagram.png" alt="Instagram" />
                    </a>
                </div>

                <div className="social-item">
                    <spam>Twitter</spam>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src="/public/twitter.png" alt="Twitter" />
                    </a>
                </div>

                <div className="social-item">
                    <spam>TikTok</spam>
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                        <img src="/public/tiktok.png" alt="TikTok" />
                    </a>
                </div>
            </div>


            <div className="footer-links">
                <a href="https://github.com/Kacper-1900/PaginaNueva" target="_blank" rel="noreferrer">
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

