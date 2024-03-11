
const SumCard = ({data}) => {
    return (
        <div className="mt-5 grid grid-cols-2 gap-7">
            <div className="bg-white px-10 py-10 rounded-lg drop-shadow-xl ">
                <p className="text-gray-800">Total Assets value</p>
                <h1 className="text-6xl font-bold mt-2">$ {data.asset_price}</h1>
                <p className="text-gray-800 text-xs mt-2">The total amount are spent to buy all assets for the organization.</p>
            </div>
            <div className="bg-white px-10 py-10 rounded-lg drop-shadow-xl ">
                <p className="text-gray-800">Monthly Employee Salary</p>
                <h1 className="text-6xl font-bold mt-2">$ {data.employee_salary}</h1>
                <p className="text-gray-800 text-xs mt-2">The total salary amount of the employees who are working for this company.</p>
            </div>
        </div>
    );
};

export default SumCard;