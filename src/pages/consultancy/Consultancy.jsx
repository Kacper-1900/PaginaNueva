import React, { useState, useEffect, useRef } from 'react';
import db from '../../FireBase.js';
import "./Consultancy.css";
import ConsultanceService from '../../consultancy-service/ConsultancyService.js';
import { FaRegTrashAlt } from "react-icons/fa";



function Consultancy() {

    const [consultancy, setConsultancy] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const refForm = useRef();

    const getAllConsultances = () => {
        ConsultanceService.getAllConsultancies()
            .then((snapshot) => {

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const allConsultances = Object.keys(data).map(key => ({
                        key,
                        ...data[key]
                    }));

                    setConsultancy(allConsultances);
                } else {
                    setConsultancy([]);
                }

            })
            .catch((err) => {
                console.error(err);
            });
    };

    const removeConsultance = (key) => {
        ConsultanceService.removeConsultance(key).then(() => {
            getAllConsultances();
        });
    }

    const addConsultance = (e) => {
        e.preventDefault();

        const question = e.target.question.value;
        const description = e.target.description.value;
        const consultant = e.target.consultant.value;
        const date = e.target.date.value;

        ConsultanceService
            .addConsultancy(question, description, consultant, date)
            .then((res) => {
                refForm.current.reset();
                setConsultancy(oldValues => [
                    ...oldValues,
                    { key: res.key, question, description, consultant, date }
                ]);
            });
    }

    useEffect(() => {
        getAllConsultances();
    }, []);

    const filteredConsultancy = consultancy.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.consultant.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="consultancy-list-main-container">
            <div className="consultancy-search">
                <input
                    className="rounded-input"
                    type="text"
                    placeholder="Buscar consultoría por pregunta o consultor."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="consultancy-form-container">
                <h1>¿Que necesitas?</h1>
                <form id="consultancy-form" onSubmit={addConsultance} ref={refForm}>
                    <input className="rounded-input" type="text" name="question" placeholder="Pregunta" required />
                    <input className="rounded-input" type="text" name="description" placeholder="descripcion" required />
                    <input className="rounded-input" type="text" name="consultant" placeholder="Tu Nombre" required />
                    <input className="rounded-input" type="text" name="date" placeholder="Fecha (Ej: 01/01/2000)" required />
                    <input className="rounded-input" type="submit" value="Añadir consulta" />
                </form>
            </div>

            <div className="consultancy-list">
                {filteredConsultancy.map(b =>
                    <div className="consultancy-item" key={b.key}>
                        <p>
                            <strong>{b.question}</strong> — {b.description} | {b.consultant} | {b.date}
                        </p>
                        <FaRegTrashAlt
                            className="delete-consultance"
                            onClick={() => removeConsultance(b.key)}
                        />
                    </div>
                )}
            </div>

        </div>
    );
}

export default Consultancy;