import { MdDevices } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";

const CountCard = ({data}) => {
    return (
        <div className="grid grid-cols-3 gap-3 mt-10">
            <div className="bg-white px-10 py-10 rounded-lg drop-shadow-xl border border-[#cecece]">
                <div className="flex items-end justify-between">
                    <p className="text-gray-800">Total Assets</p>
                    <MdDevices color="#6558F5" size={20} />
                </div>
                <h1 className="text-6xl font-bold mt-2">{data.asset_count}</h1>
                <p className="text-gray-800 text-xs mt-2">The number of assets are included.</p>
            </div>
            <div className="bg-white px-10 py-10 rounded-lg drop-shadow-xl border border-[#cecece]">
                <div className="flex items-end justify-between">
                    <p className="text-gray-800">Total Employees</p>
                    <IoPeopleOutline color="#6558F5" size={20} />
                </div>
                <h1 className="text-6xl font-bold mt-2">{data.employee_count}</h1>
                <p className="text-gray-800 text-xs mt-2">The number of employees are working .</p>
            </div>
            <div className="bg-white px-10 py-10 rounded-lg drop-shadow-xl border border-[#cecece]">
                <div className="flex items-end justify-between">
                    <p className="text-gray-800">Distributed Assets</p>
                    <FiActivity color="#6558F5" size={20} />
                </div>
                <h1 className="text-6xl font-bold mt-2">{data.distributed_asset_count}</h1>
                <p className="text-gray-800 text-xs mt-2">The number of devices are distributed .</p>
            </div>
        </div>
    );
};

export default CountCard;