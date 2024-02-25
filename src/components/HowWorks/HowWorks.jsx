import Title from "../Title/Title";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdOutlineAddToQueue , MdOutlineManageHistory } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";

const HowWorks = () => {
    return (
        <div>
            <Title>How It Works</Title>
            {/* <!-- component --> */}
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-8 absolute border-[#6558F5] h-full border" style={{left:"50%"}}></div>
                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#6558F5] shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white"><VscGitPullRequestCreate size={25} /></h1>
                        </div>
                        <div className="order-1 bg-[#6558F5] bg-opacity-[40%] rounded-lg shadow-xl w-5/12 px-10 py-11">
                            <h3 className="mb-3 font-bold text-2xl">Sign Up</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Register your account and set up your company profile.</p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#6558F5] shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg"><MdOutlineAddToQueue size={25} /></h1>
                        </div>
                        <div className="order-1 bg-[#6558F5] bg-opacity-[40%] rounded-lg shadow-xl w-5/12 px-10 py-11">
                            <h3 className="mb-3 font-bold text-2xl">Add Assets</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">Easily add your company's assets to the system, including equipment, vehicles, and more.</p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#6558F5] shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white"><IoPersonAddOutline size={25} /></h1>
                        </div>
                        <div className="order-1 bg-[#6558F5] bg-opacity-[40%] rounded-lg shadow-xl w-5/12 px-10 py-11">
                            <h3 className="mb-3 font-bold text-2xl">Add Employees</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Add all of your employees data so that you can easily maintain their asset useage performance and track their activity.</p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#6558F5] shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg"><MdOutlineManageHistory size={25} /></h1>
                        </div>
                        <div className="order-1 bg-[#6558F5] bg-opacity-[40%] rounded-lg shadow-xl w-5/12 px-10 py-11">
                            <h3 className="mb-3 font-bold text-2xl">Manage Assets</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">Utilize our intuitive dashboard to track, monitor, and manage your assets effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;