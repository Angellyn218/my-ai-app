import React from 'react';
import UserInput from './UserInput';
import ClearButton from './ClearButton';

const UserInputForm = ({ isLoading, inputValue, setInput, clearButtonVisible, handleSubmit, handleReset }) => {
    return (
        <div className="mx-auto min-w-full flex flex-col justify-center items-center ">
            {/* User Input Form */}
            <form onSubmit={handleSubmit} onReset={handleReset} className="w-full max-w-4xl mb-6">
                <div className="space-y-2 w-full">
                    <div className="border border-gray-900/10 p-6 bg-gray-200">
                        <div className='flex'>
                            <UserInput isLoading={isLoading} inputValue={inputValue} setInput={setInput} clearButtonVisible={clearButtonVisible}/>
                            {clearButtonVisible && <ClearButton isLoading={isLoading}/>}
                        </div>
                    </div>
                </div>   
            </form>
        </div>
    );
}

export default UserInputForm;