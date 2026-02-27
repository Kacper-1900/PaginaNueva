import React from "react";
import "./Services.css";

function Services() {
    return (
        <div className="services-wrapper">

            <section className="services-hero">
                <img src="/logo.png" alt="Logo" className="logo" />

                <h1 className="hero-title">
                    ¿Por qué conformarte con lo bueno, si existe algo mejor?
                </h1>

                <p className="hero-subtitle">
                    Encuentra lo que tu empresa necesita, ni más ni menos
                </p>
            </section>

            <section className="services-container">
                <div className="service-card blue">
                    <span className="icon">📷</span>
                    <h3>Fotos</h3>
                    <p>Profesionales y de alta calidad.</p>
                </div>

                <div className="service-card orange">
                    <span className="icon">🤵💍👰</span>
                    <h3>Bodas</h3>
                    <p>Captamos tus momentos más importantes.</p>
                </div>

                <div className="service-card purple">
                    <span className="icon">🎈🎂</span>
                    <h3>Cumpleaños</h3>
                    <p>Registramos cada celebración con amor.</p>
                </div>

                <div className="service-card green">
                    <span className="icon">🏢</span>
                    <h3>Empresas</h3>
                    <p>Impulsa tu marca con imágenes impactantes.</p>
                </div>
            </section>

        </div>
    );
}

export default Services;