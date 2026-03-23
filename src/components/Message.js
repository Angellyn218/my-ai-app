import React from 'react';

const Message = ( { text, role } ) => {
    return (
        <div className="mx-auto w-full flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <label htmlFor='message' className="block text-sm/6 font-medium text-gray-900 sm:justify-start">{role}</label>
            <p className='sm:px-4'>{text}</p>
        </div>
    )
}

export default Message;