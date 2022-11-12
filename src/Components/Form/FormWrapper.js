import React, { useState } from 'react'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'

const FormWrapper = (props) => {
    const [error, setError] = useState()
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                header: "Invalid input!",
                message: "Please enter valid name & age (non-empty values)"
            })
            return
        }

        if (+age < 1) {
            setError({
                header: "Invalid age!",
                message: "Please enter valid age (age should be greater than 0)"
            })
            return
        }

        const userData = {
            id: Math.random().toString(),
            name: userName,
            age,
        }
        props.onAddUser(userData)
        setUserName('')
        setAge('')
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
                        <input id="username" type="text" onChange={userNameChangeHandler} value={userName} className='mobile:w-60 tablet:w-96 rounded-md h-8 outline-none p-2 text-lg' />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label htmlFor='age' className='text-white font-bold mb-1'>Age (years)</label>
                        <input id="age" type="number" onChange={ageChangeHandler} value={age} className='mobile:w-60 tablet:w-96 rounded-md h-8 outline-none p-2 text-lg' />
                    </div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </>
    )
}

export default FormWrapper
