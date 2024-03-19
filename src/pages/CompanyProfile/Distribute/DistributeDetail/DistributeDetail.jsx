/* eslint-disable react-hooks/exhaustive-deps */
import Loader from "@/components/Loader/Loader";
import { distributeUrl } from "@/Utilies/Url";
import { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { getAuth } from "@/components/Context/GetContext";
import Swal from 'sweetalert2';

const DistributeDetail = () => {
    const accessToken = localStorage.getItem("accessToken");
    const {distributeId} = useParams();
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const {user} = getAuth();
    const [checkReturn,setCheckReturn] = useState(false)

    const getFormateDate = date =>{
        const dateData = date.split("-").map(date => parseInt(date));
        return format(new Date(dateData[0], dateData[1], dateData[2]),'PPPP');
    }

    const handleTakeBack = () =>{
        const formData = {
            asset : data.asset.id,
            employee : data.employee.id,
            provide_conditions : data.provide_conditions,
            return_conditions : data.return_conditions,
            provide_date : data.provide_date,
            return_date : data.return_date,
            company : user.id,
            returned : true
        }
        
        fetch(distributeUrl + distributeId + "/", {
            method: "PUT",
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then(res => {
            if (res.status == 200) {
                setCheckReturn(true);
                Swal.fire('Successfully Returned the asset.',"",'success');
            }
        })
    }

    useEffect(()=>{
        fetch(distributeUrl+distributeId,{
            method: "GET",
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(res =>{
            if(res.status==401){
                navigate('/login');
            }
            return res.json();
        }).then(data => setData(data))
    },[checkReturn])

    if(!data.id){
        return <Loader/>;
    }

    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold">{data.asset.name}</h1>
            <h2 className="mt-2 text-xl font-semibold">Employee : {data.employee.name}</h2>
            <div className="mt-5 grid grid-cols-3 gap-5">
                <div className="px-3 py-4 bg-blue-50 border-2 border-blue-200 rounded-md">
                    <p className="text-xs">Provided Date</p>
                    <h3 className="font-semibold text-xl">{getFormateDate(data.provide_date)}</h3>
                </div>
                <div className="px-3 py-4 bg-blue-50 border-2 border-blue-200 rounded-md">
                    <p className="text-xs">Return Date</p>
                    <h3 className="font-semibold text-xl">{getFormateDate(data.return_date)}</h3>
                </div>
                <div 
                    className={`px-3 py-4  rounded-md flex items-center justify-center ${
                        data.status == 'Free' ? "bg-green-50 border-2 border-green-200 text-green-600"
                        : data.status == 'Using' ? "bg-blue-50 border-2 border-blue-200 text-blue-600"
                            : "bg-red-50 border-2 border-red-200 text-red-600"
                    }`}>
                        <h3 className="font-semibold text-xl">{data.status}</h3>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="px-3 py-4 bg-blue-50 border-2 border-blue-200 rounded-md ">
                    <h1 className="font-semibold text-xl">Provided Conditions</h1>
                    <p>{data.provide_conditions}</p>
                </div>
                <div className="px-3 py-4 bg-blue-50 border-2 border-blue-200 rounded-md ">
                    <h1 className="font-semibold text-xl">Return Conditions</h1>
                    <p>{data.return_conditions}</p>
                </div>
            </div>
            <Button className="bg-[#6558F5] hover:bg-[#4a40b6] mt-5" onClick={handleTakeBack} disabled={data.returned} ><RiArrowGoBackFill size={18} className="mr-2" /> Take Back</Button>
        </div>
    );
};

export default DistributeDetail;