import React from 'react'
import List from './List'

const Wrapper = (props) => {
    if (props.users.length === 0) {
        console.log(props.users.length);
        return <h2 className='text-center my-5 text-lg font-bold text-black'>No Users Found</h2>
    }
    return (
        <div className='bg-slate-800 mobile:px-2 tablet:px-10 py-5 rounded-lg'>
            <ul>
                {
                    props.users.map((user) => <List key={user.id} userName={user.name} userAge={user.age} />)
                }
            </ul>
        </div>
    )
}

export default Wrapper
