import React from 'react';

const UserInput = ({ isLoading, inputValue, setInput, clearButtonVisible }) => {
    return (
        <div className={clearButtonVisible ? "w-5/6" : "w-full"}>
            {/* Label for message box */}
            <label htmlFor='username' className="block text-sm/6 font-medium text-gray-900">Message</label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    {/* User Input Box */}
                    <input id="userInput" type="text" name="userInput" value={inputValue} onChange={(e) => setInput(e.target.value)} disabled={isLoading} placeholder="start typing" className="block min-w-0 grow bg-white py-1.5 pr-1 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    {/* Submit Button */}
                    <button type="submit" disabled={isLoading} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default UserInput;