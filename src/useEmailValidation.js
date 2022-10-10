import { useReducer, useState } from 'react';
import useInterval from './useInterval';

const useEmailValidation = (seconds) => {

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const [emailValid, setEmailValid] = useState(false); //false because start with empty text
    const emailReducer = (state, action) => { // state is email, action is the first parameter we called setEmail with
        const isValidEmail = validateEmail(action);
        setEmailValid(isValidEmail);
        return action;
    };

    const [email, setEmail] = useReducer(emailReducer, ''); //sets valid email as well as email. keeps these in sync. first state is email reducer function, second is initial value of email. emailReducer is what sets the state of email
    const maxSeconds = seconds;
    const [count, setCount] = useState(maxSeconds);

    useInterval(() => { // another react hook using setInterval. first parameter is function that gets executed over and over at an interval we set
        setCount(count - 1);
    }, 1000);
    const retObject = { setEmail, count, email, emailValid, setCount }
    return retObject
}

export default useEmailValidation