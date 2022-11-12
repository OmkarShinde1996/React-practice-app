import React, { useState, useRef } from 'react'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'

const FormWrapper = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()
    // const [userName, setUserName] = useState('')
    // const [age, setAge] = useState('')
    // const userNameChangeHandler = (event) => {
    //     setUserName(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value)
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                header: "Invalid input!",
                message: "Please enter valid name & age (non-empty values)"
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                header: "Invalid age!",
                message: "Please enter valid age (age should be greater than 0)"
            })
            return
        }

        const userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
        }
        props.onAddUser(userData)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setUserName('')
        // setAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModel header={error.header} message={error.message} onConfirm={errorHandler} />}
            <form onSubmit={formSubmitHandler} className='my-10'>
                <div className='bg-slate-800 mobile:px-2 tablet:px-10 py-5 rounded-lg'>
                    <div className='flex flex-col mb-2'>
                        <label htmlFor='username' className='text-white font-bold mb-1'>Username</label>
                        <input ref={nameInputRef} id="username" type="text" className='mobile:w-60 tablet:w-96 rounded-md h-8 outline-none p-2 text-lg' />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label htmlFor='age' className='text-white font-bold mb-1'>Age (years)</label>
                        <input ref={ageInputRef} id="age" type="number" className='mobile:w-60 tablet:w-96 rounded-md h-8 outline-none p-2 text-lg' />
                    </div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </>
    )
}

export default FormWrapper
