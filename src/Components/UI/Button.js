import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.onClick} className='px-3 py-1 bg-orange-400 hover:bg-orange-500 text-white rounded-md'>
      {props.children}
    </button>
  )
}

export default Button
