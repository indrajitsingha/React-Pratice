
const Add = () => {
    return (
        <div className="container flex absolute top-[10%]  mr-[200px]">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-[100%] mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Employee</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Designation</label>
                    <input type="text"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Profile Image</label>
                    <input type="file"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-[rgb(0,140,255)] rounded text-lg font-bold">Add Employee</button>
                <button  className="text-white  border-0 py-2 px-6 focus:outline-none bg-black rounded text-lg font-bold mt-2">Cancel</button>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
        </div>
    )
}

export default Add