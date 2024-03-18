import { dashboardUrl } from "@/Utilies/Url";
import BarChart from "@/components/Charts/BarChart";
import { getAuth } from "@/components/Context/GetContext";
import CountCard from "@/components/CountCard/CountCard";
import Loader from "@/components/Loader/Loader";
import SumCard from "@/components/SumCard/SumCard";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
    const {user,setUser} = getAuth();
    const [data,setData] = useState({});
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(dashboardUrl,{
            method : 'GET',
            headers : {
                'Authorization' : `JWT ${accessToken}`,
                'Content-Type' : 'application/json',
            }
        })
        .then(res => {
            if(res.status==401){
                setUser({});
                navigate('/login');
            }
           return res.json();
        })
        .then(dt => setData(dt))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!data){
        return <Loader/>;
    }
   
    return (
        <div className="my-5 px-5">
            <h1 className="text-center font-semibold text-3xl">Welcome to <span className="text-[#6558F5]">{user?.name}</span> Company Profile</h1>
            <CountCard data={data}/>
            <SumCard data={data} />
            <BarChart data={data}/>
            
        </div>
    );
};

export default Dashboard;