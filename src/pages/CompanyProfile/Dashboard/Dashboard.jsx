import { dashboardUrl } from "@/Utilies/Url";
import BarChart from "@/components/Charts/BarChart";
import { AuthContext } from "@/components/Context/ContextApi";
import CountCard from "@/components/CountCard/CountCard";
import SumCard from "@/components/SumCard/SumCard";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState({});
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        fetch(dashboardUrl,{
            method : 'GET',
            headers : {
                'Authorization' : `JWT ${accessToken}`,
                'Content-Type' : 'application/json',
            }
        })
        .then(res => res.json())
        .then(dt =>setData(dt))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="my-5 px-5">
            <h1 className="text-center font-semibold text-3xl">Welcome to <span className="text-[#6558F5]">{user.name}</span> Company Profile</h1>
            <CountCard data={data}/>
            <SumCard data={data} />
            <BarChart data={data}/>
            
        </div>
    );
};

export default Dashboard;