import React from 'react';

const ClearButton = ({ isLoading }) => {
    return (
        <div className='w-1/6 flex flex-col items-end justify-end mx-auto'>
            <button type="reset" disabled={isLoading} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-300">Clear Chat</button>
        </div>
);
};

export default ClearButton;