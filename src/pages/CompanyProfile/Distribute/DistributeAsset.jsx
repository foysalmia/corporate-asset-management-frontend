/* eslint-disable react-hooks/exhaustive-deps */
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DatePicker from "@/components/DatePicker/DatePicker";
import { useEffect, useState } from "react";
import { formateDate } from "@/Utilies/DateFormat";
import { assetUrl, distributeUrl, employeeUrl } from "@/Utilies/Url";
import Loader from "@/components/Loader/Loader";
import { getAuth } from "@/components/Context/GetContext";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const DistributeAsset = () => {
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const {user} = getAuth();
    const [assets,setAssets] = useState([]);
    const [employees,setEmployees] = useState([]);

    const [asset,setAsset] = useState("");
    const [employee,setEmployee] = useState("");
    const [provideCondition,setProvideCondition] = useState("");
    const [returnCondition,setReturnCondition] = useState("");
    const [provideDate,setProvideDate] = useState("");
    const [returnDate,setReturnDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const distributeData = {
            asset,employee,
            provide_conditions : provideCondition,
            return_conditions : returnCondition,
            provide_date : formateDate(provideDate),
            return_date : formateDate(returnDate),
            company : user.id,
            return : false
            
        }
        console.log(distributeData);
        fetch(distributeUrl,{
            method : 'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(distributeData)
        }).then(res =>{
            if(res.status==201){
                Swal.fire("Asset Successfully Distributed","","success");
                navigate("/profile/distribute/");
            }
        })
    }

    useEffect(()=>{
        fetch(assetUrl,{
            method:'GET',
            headers:{
                'Authorization' : `JWT ${accessToken}`,
                'Content-Type' : 'application/json',
            }
        }).then(res => res.json())
        .then(data => setAssets(data));

        fetch(employeeUrl, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => setEmployees(data));
    },[]);

    if(!assets.length && !employees.length){
        return <Loader/>;
    }

    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-3xl">Distribute Assets in Employee</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the credentials to distribute an asset to a currently working employee of your organization.</p>
            <form onSubmit={handleSubmit} >
                <div className='mt-5'>
                    <Select onValueChange={(e)=>setAsset(e)}>
                        <SelectTrigger >
                            <SelectValue placeholder="Select Asset" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                assets.map(data => <SelectItem value={`${data.id}`} key={data.id}>{data.name}</SelectItem> )
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-2'>
                    <Select onValueChange={(e)=>setEmployee(e)} >
                        <SelectTrigger >
                            <SelectValue placeholder="Select Employee" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                employees.map(data => <SelectItem value={`${data.id}`} key={data.id}>{data.name}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-2'>
                    <Label htmlFor="ptdescription">Providing Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="ptdescription"
                        onChange={(e) => setProvideCondition(e.target.value)}
                        placeholder="Enter asset condition when you provide that to your trusted employee."
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="rtdescription">Return Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="rtdescription"
                        onChange={(e) => setReturnCondition(e.target.value)}
                        placeholder="Enter asset condition when you collect that from your trusted employee."
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <DatePicker text="Providing Date" date={provideDate} setDate={setProvideDate} />
                    <DatePicker text="Return Date" date={returnDate} setDate={setReturnDate} />
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Distribute</Button>
            </form>
        </div>
    );
};

export default DistributeAsset;