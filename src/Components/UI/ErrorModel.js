import React from 'react'
import Button from './Button'

const ErrorModel = (props) => {
    return (
        <>
            <div className='backdrop' onClick={props.onConfirm} />
            <div className='bg-slate-200 modal rounded-lg'>
                <header className='text-lg text-black font-bold bg-slate-800 p-4'>
                    <h2 className='text-white'>{props.header}</h2>
                </header>
                <div className='content'>
                    <p className='text-base text-black font-semibold'>{props.message}</p>
                </div>
                <footer className='p-4 flex justify-end'>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>

            </div>
        </>
    )
}

export default ErrorModel
