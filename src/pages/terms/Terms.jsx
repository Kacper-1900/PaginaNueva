import React from 'react';
import './Terms.css';
function Terms() {
    return (
        <div className="terms-container">
            <h1>Términos y Condiciones</h1>
            <p>Al utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones:</p>
            <ul>
                <li>El contenido de este sitio es solo para fines informativos y no debe ser considerado como asesoramiento legal.</li>
                <li>No nos hacemos responsables de cualquier daño o pérdida que pueda resultar del uso de este sitio web.</li>
                <li>Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.</li>
                <li>Al continuar utilizando este sitio después de cualquier cambio, aceptas los términos modificados.</li>
            </ul>
            <p>Si tienes alguna pregunta sobre estos términos, por favor contáctanos a través de nuestro correo electrónico: info@pictureskacper.com</p>
        </div>
    );
}
export default Terms;