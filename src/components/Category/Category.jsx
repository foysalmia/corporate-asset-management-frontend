import { LuMonitor, LuMouse } from "react-icons/lu";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa6";

const Category = ({data}) => {
    return (
        <div className="col-span-3 bg-white border border-gray-100 drop-shadow-sm rounded-lg px-5 py-2">
            <h1 className="font-semibold text-2xl mt-5">Total Asset Category:</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <LuMonitor size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Monitor</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Monitor || 0}</h1>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <FaLaptop size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Laptop</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Laptop || 0}</h1>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <FiPrinter size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Printer</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Printer || 0}</h1>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <LuMouse size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Mouse</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Mouse || 0}</h1>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <FaRegKeyboard size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Keyboard</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Keyboard || 0}</h1>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="bg-[#9d95f8] text-white p-3 rounded-lg">
                            <FaMobileAlt size={15} />
                        </div>
                        <h1 className="ml-3 font-semibold text-2xl">Mobile</h1>
                    </div>
                    <h1 className="font-semibold text-2xl">{data?.Mobile || 0}</h1>
                </div>
            </div>
            <p className="text-gray-800 font-xs mt-10">If you need more customize category for your organizations asset. You have to purchase our premium membership.</p>
        </div>
    );
};

export default Category;