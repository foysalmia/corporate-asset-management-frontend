import BarChart from "@/components/Charts/BarChart";
import { AuthContext } from "@/components/Context/ContextApi";
import CountCard from "@/components/CountCard/CountCard";
import SumCard from "@/components/SumCard/SumCard";
import { useContext } from "react";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div className="my-5 px-5">
            <h1 className="text-center font-semibold text-3xl">Welcome to <span className="text-[#6558F5]">{user.name}</span> Company Profile</h1>
            <CountCard/>
            <SumCard/>
            <BarChart/>
            
        </div>
    );
};

export default Dashboard;