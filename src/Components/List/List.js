import React from 'react'

const List = (props) => {
  return (
    <li>
      <div className='border-[1px] border-white p-2 my-2 mobile:w-60 tablet:w-96 bg-slate-400 rounded-md'>
        <span className='text-lg font-semibold'>{`${props.userName} (${props.userAge} years old)`}</span>
      </div>
    </li>
  )
}

export default List
