import 'animate.css';
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { VscDebugStart } from "react-icons/vsc";

import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';

const Header = () => {
    return (
        <div className="w-full h-screen bg-[url('assets/Background.svg')] bg-cover">
            <Navbar />
            <div className="flex justify-center flex-col items-center pt-11 pb-30">
                <h1 className="text-center mt-11 text-5xl font-bold leading-normal text-white animate__animated animate__lightSpeedInRight">Empower Your Assets with AssetPulse<br />Leading the Symphony of Efficiency!</h1>
                <p className="text-center text-white font-normal text-base mt-5">Welcome to AssetPulse, where efficiency reigns supreme. Take charge of your assets<br />and orchestrate success with our dynamic platform at the helm.</p>
                <div className="flex flex-row items-center mt-11">
                    <Link to="/profile/dashboard"><Button className="mr-5 drop-shadow-lg bg-[#6558F5] hover:bg-[#3e3697]">Get Started <VscDebugStart size={20} /></Button></Link>
                    <VideoModal/>
                </div>
            </div>
            
        </div>
    );
};

export default Header;