import React from 'react';
import "./Consultancy.css";




function Consultoria() {
    const [consultancy, setConsultancy] = useState([]);
    const refForm = useRef();

    const getAllConsultances = () => {
        ConsultanceService.getAllConsultances()
            .then((items) => {
                let allConsultances = [];
                items.forEach(item => {
                    const key = item.key;
                    const data = item.val();
                    allConsultances.push({
                        key: key,
                        question: data.question,
                        description: data.description,
                        consultant: data.consultant,
                        date: data.date
                    });
                });
                setConsultancy([...allConsultances]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const removeConsultance = (key) => {
        ConsultanceService.removeConsultance(key).then((res) => {
            getAllConsultances();
        });
    }

    const addConsultance = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const description = e.target.description.value;
        const consultant = e.target.consultant.value;
        const date = e.target.date.value;

        ConsultanceService.addConsultance(question, description, consultant, date).then((res) => {
            refForm.current.reset();
            setConsultancy(oldValues => [...oldValues, { key: res.key, question, description, consultant, date }])
        })
    }

    useEffect(() => {
        getAllConsultances();
    }, []);

    return (
        <div className="consultancy-list-main-container">
            <div className="consultancy-form-container">
                <form id="consultancy-form" onSubmit={addConsultance} ref={refForm}>
                    <input className="rounded-input" type="text" name="question" placeholder="question" />
                    <input className="rounded-input" type="text" name="description" placeholder="description" />
                    <input className="rounded-input" type="text" name="consultant" placeholder="your name" />
                    <input className="rounded-input" type="text" name="date" placeholder="date" />
                    <input className="rounded-input" type="submit" value="Add Consultancy" />
                </form>
            </div>

            <div className="consultancy-list">
                {consultancy.map(b =>
                    <div className="consultancy-item" key={b.key}>
                        <p>{b.question} {b.description} {b.consultant} {b.date} </p>
                        <FaRegTrashAlt className="delete-consultance" onClick={() => removeConsultance(b.key)} />
                    </div>
                )}
            </div>
        </div>
    );
}
export default Consultoria;