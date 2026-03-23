import React from 'react';

const UserInput = ({ handleSubmit, isLoading }) => {
    return (
        <div className="mx-auto min-w-full flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl mb-6">
                <div className="space-y-2 w-full">
                    <div className="border border-gray-900/10 p-6 bg-gray-200">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label htmlFor='username' className="block text-sm/6 font-medium text-gray-900">Message</label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                        <input id="userInput" type="text" name="userInput"
                                        placeholder="start typing" className="block min-w-0 grow bg-white py-1.5 pr-1 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                        <button type="submit" disabled={isLoading} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </form>
        </div>
    )
}

export default UserInput;