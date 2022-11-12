import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


//We are creating portals here to shift backdrop and modal as close as possible to the body element
//for this We have created 2 div elements into index.html file befor the div containing root id
//then created 2 functions as below which returns backdrop and modal respectively
// and in jsx return statement creaed a portl to the dev elements which are created in index.html 
// with the help of ReactDOM.createPortal which will accepts 2 arguments
//1 is the component which needs to be rendered
//2 is the location of the root in which component needs to be rendered.
//Portal is usefull in case on modals, backdrops, side navigation bar, etc.

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
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
    )
}

const ErrorModel = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay header={props.header} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
        </>
    )
}

export default ErrorModel
