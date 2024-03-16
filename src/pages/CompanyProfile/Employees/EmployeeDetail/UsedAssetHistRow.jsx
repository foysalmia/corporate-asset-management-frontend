import { CiBookmarkCheck } from "react-icons/ci";
import { MdRadioButtonUnchecked } from "react-icons/md";

const UsedAssetHistRow = ({data}) => {
    return (
        <div className="bg-gray-100 py-3 px-2 grid grid-cols-8 border-2 mt-5 rounded-md">
            <div >
                {
                    data.returned ? <CiBookmarkCheck size={40} color="#6558F5" />
                        : <MdRadioButtonUnchecked size={40} color="#FF8020" />
                }
            </div>
            <div className="col-span-2">
                <h1 className="text-xs">Employee Name</h1>
                <h1>{data?.asset?.name}</h1>
            </div>
            <div className="col-span-2">
                <h1 className="text-xs">Provided Conditon</h1>
                <h1>{data.provide_conditions}</h1>
            </div>
            <div className="col-span-2">
                <h1 className="text-xs">Return  Conditon</h1>
                <h1>{data.return_conditions} </h1>
            </div>
            <div>
                <h1 className="text-xs">Return  Date</h1>
                <h1>{data.return_date}</h1>
            </div>
        </div>
    );
};

export default UsedAssetHistRow;