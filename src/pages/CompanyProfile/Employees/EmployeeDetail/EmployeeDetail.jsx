/* eslint-disable react-hooks/exhaustive-deps */
import { employeeUrl } from "@/Utilies/Url";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom"
import UsedAssetHist from "./UsedAssetHist";
import { FaRegEdit } from "react-icons/fa";
import EmployeeDelete from "./EmployeeDelete";

const EmployeeDetail = () => {
    const { employeeId } = useParams();
    const [employee,setEmployee] = useState({});
    const accessToken = localStorage.getItem("accessToken");

    useEffect(()=>{
        fetch(employeeUrl+employeeId,{
            method:"GET",
            headers: {
                "Authorization": `JWT ${accessToken}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setEmployee(data))
    },[employeeId]);

    if(!employee.id){
        return <Loader/>;
    }
    return (
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-4xl">{employee.name}</h1>
                    <h1 className="text-xm mt-3">{employee.designation}</h1>
                    <h1 className="text-xm mt-2 font-semibold">Joining Date: {employee.join_date}</h1>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">${employee.salary}</h1>
                    <div className="flex justify-center items-center">
                        <EmployeeDelete employeeId={employeeId} />
                        <Link className="ml-3 flex justify-around items-center px-3 py-2 bg-green-600 text-white rounded-md">
                            <FaRegEdit />Edit</Link>
                    </div>
                </div>
            </div>
            <hr className="my-3" />
            <p>{employee.description}</p>
            <hr className="my-3" />
            <UsedAssetHist employeeId={employeeId}/>
        </div>
    );
};

export default EmployeeDetail;