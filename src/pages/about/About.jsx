import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <div className="about-me-content">
                <h1>Sobre mí</h1>
                <p>Hola, soy un fotógrafo apasionado por capturar momentos especiales. En esta página encontrarás una selección de mis mejores fotografías.</p>
                <p>Me especializo en retratos, naturaleza y eventos sociales. Mi objetivo es transmitir emociones a través de mis imágenes y compartir mi visión del mundo. Gracias por visitar mi sitio web y espero que disfrutes de mi trabajo.</p>
                <p>Además en esta página encontrarás información sobre mis servicios y cómo puedo ayudarte a capturar tus momentos más importantes.</p>
                <p>Finalmente, en esta página no solo encontrarás fotografías mías, también tengo imagenes de otros fotógrafos que comparten mi pasión por la fotografía.</p>
                <img src="/man.png" alt="Foto de Kacper" className="about-image" />
            </div>
            <div className="about-proyect">
                <h1>Sobre el proyecto</h1>
                <p>Este proyecto es una página web de fotografía creada con React. El objetivo de esta página es mostrar una selección de fotografías de diferentes categorías, como naturaleza, retratos y eventos sociales.</p>
                <p>La página cuenta con un diseño moderno y responsivo, lo que permite a los usuarios disfrutar de las imágenes en cualquier dispositivo. Además, la página incluye información sobre los fotógrafos y sus servicios, así como una sección de contacto para que los usuarios puedan solicitar más información o contratar sus servicios.</p>
                <p>En resumen, este proyecto es una plataforma para compartir la pasión por la fotografía y conectar a los fotógrafos con su audiencia. ¡Espero que disfrutes explorando las imágenes y descubriendo nuevos talentos!</p>

            </div>
            <div className="about-team">
                <h1>Sobre el equipo</h1>
                <p>El equipo detrás de este proyecto está compuesto por un grupo de fotógrafos apasionados por la fotografía y el diseño web. Cada miembro del equipo aporta su experiencia y creatividad para crear una página web atractiva y funcional.</p>
                <p>El equipo se dedica a seleccionar cuidadosamente las fotografías que se muestran en la página, asegurándose de que cada imagen transmita emociones y cuente una historia. Además, el equipo trabaja constantemente para mejorar la experiencia del usuario y agregar nuevas funciones a la página.</p>
                <p>En resumen, el equipo detrás de este proyecto es un grupo de profesionales dedicados a compartir su amor por la fotografía y crear una plataforma para que otros puedan disfrutar de su trabajo.</p>
                <img src="/team.png" alt="Foto del equipo" className="team-image" />
                <h2>¡Gracias por visitar nuestra página web!</h2>
            </div>

        </div>
    );
}
export default About;