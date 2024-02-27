import BarChart from "@/components/Charts/BarChart";
import CountCard from "@/components/CountCard/CountCard";
import SumCard from "@/components/SumCard/SumCard";

const Dashboard = () => {
    
    return (
        <div className="my-5 px-5">
            <h1 className="text-center font-semibold text-3xl">Welcome to <span className="text-[#6558F5]">Skillup Hub</span> Company Profile</h1>
            <CountCard/>
            <SumCard/>
            <BarChart/>
            
        </div>
    );
};

export default Dashboard;