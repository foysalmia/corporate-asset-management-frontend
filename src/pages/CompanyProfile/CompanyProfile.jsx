import { RxDashboard } from "react-icons/rx";
import { MdDevices } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import {  NavLink, Outlet } from "react-router-dom";
import { CgPushChevronRightR } from "react-icons/cg";

const CompanyProfile = () => {
    return (
        <div className='grid grid-cols-5 gap-2'>
            <div>
                <div className='bg-[#6558F5] fixed h-screen py-5 px-10'>
                    <h1 className='text-white font-bold text-3xl'>Asset Pulse</h1>
                    <div className='mt-5'>
                        <NavLink
                            to='/profile/dashboard'
                            className={
                                ({ isActive }) => isActive ?
                                    "bg-[#372DA6] text-white font-semibold text-xl px-3 py-2 rounded-md flex items-center" :
                                    "text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center"}
                        >
                            <RxDashboard size={25} className='mr-2' />Dashboard
                        </NavLink>
                    </div>
                    <div className='mt-2'>
                        <NavLink
                            to='/profile/assets'
                            className={
                                ({ isActive }) => isActive ?
                                    "bg-[#372DA6] text-white font-semibold text-xl px-3 py-2 rounded-md flex items-center" :
                                    "text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center"}
                        >
                            <MdDevices size={25} className='mr-2' />Assets
                        </NavLink>
                    </div>
                    <div className='mt-2'>
                        <NavLink
                            to='/profile/employees'
                            className={
                                ({ isActive }) => isActive ?
                                    "bg-[#372DA6] text-white font-semibold text-xl px-3 py-2 rounded-md flex items-center" :
                                    "text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center"}
                        >
                            <GoPeople size={25} className='mr-2' />Employees
                        </NavLink>
                    </div>
                    <div className='mt-2'>
                        <NavLink
                            to='/profile/distribute'
                            className={
                                ({ isActive }) => isActive ?
                                    "bg-[#372DA6] text-white font-semibold text-xl px-3 py-2 rounded-md flex items-center" :
                                    "text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center"}
                        >
                            <CgPushChevronRightR size={25} className='mr-2' />Distribute
                        </NavLink>
                    </div>
                    <div className='mt-2'>
                        <a className='text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center' ><RiAdminLine size={25} className='mr-2' />Admin</a>
                    </div>
                    <div className='mt-2'>
                        <a className='text-white font-semibold text-xl px-3 py-2 hover:bg-[#372DA6] rounded-md flex items-center' ><PiSignOutBold size={25} className='mr-2' />Sign Out</a>
                    </div>

                </div>
            </div>
            <div className="col-span-4">
                <Outlet/>
            </div>
            
        </div>
    );
};

export default CompanyProfile;