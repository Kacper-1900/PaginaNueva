import db from "../FireBase.js";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/PicturesKacper");

const getAllConsultancies = () => {
    return get(dbRef);
};

const addConsultancy = (question, description, consultant, date) => {
    return push(dbRef, {
        question : question, 
        description : description, 
        consultant : consultant, 
        date : date
    });
};

const removeConsultance = (key) => {
    const dbRefPicturesKacper = ref(db, `/PicturesKacper/${key}`);
    return remove(dbRefPicturesKacper);
};

export default {
    getAllConsultancies,
    addConsultancy,
    removeConsultance,
};