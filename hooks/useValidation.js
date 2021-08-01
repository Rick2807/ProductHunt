import React,{useState, useEffect} from 'react'

const useValidation = (initialState, validate, fn) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        //run this code when submit changes 
        if(submit){
            //check if theres something inside of error object
            const noError = Object.keys(errors).length === 0; 
            //if theres nothing then execute the function we passed as a parameter 
            if(noError){
                fn()
            }
            //set submit back to false so that it does not execute infinitely 
            setSubmit(false)
        }
        
    }, []);

    // Function that'll run on every key stroke
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    //Function that'll run when the user submits the form 
    const handleSubmit = e => {
        e.preventDefault(); 
        const validationErrors = validate(values); 
        setErrors(validationErrors);
        setSubmit(true);
    }

    return{
        values,
        errors, 
        submit,
        handleChange,
        handleSubmit
    }
}

export default useValidation
