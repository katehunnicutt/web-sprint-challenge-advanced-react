// write your custom hook here to control your checkout form
import {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
 };

const useForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [storedValue, setStoredValue] = useState(initialValue);

    const handleChanges = (e) => {
        setStoredValue({ ...storedValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowSuccessMessage(true);
    };

    return [showSuccessMessage, storedValue, handleChanges, handleSubmit]
}

export default useForm