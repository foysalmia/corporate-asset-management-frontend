import Batch from "../Batch/Batch";
import Title from "../Title/Title";
import AssetTrackImg from "../../assets/asset-tracking.png"
import DatabaseImg from "../../assets/database.png"
import ReportImg from "../../assets/report.png"
import InterfaceImg from "../../assets/interface.png"

const Features = () => {
    return (
        <div className="mt-10 mx-10">
            <Title>Key Features</Title>
            <div className="mx-5 my-10">
                {/* Left Image */}
                <div className="grid grid-cols-5 gap-1 mt-20">
                    <div className="flex justify-center items-center col-span-2">
                        <img src={AssetTrackImg} alt="asset tracking image" />
                    </div>
                    <div>
                        <Batch>1</Batch>
                    </div>
                    <div className="col-span-2 -ml-10">
                        <h1 className="text-4xl font-semibold uppercase text-[#6558F5]">Real Time Asset Tracking</h1>
                        <p className="text-2xl mt-8">Track your assets in real-time with our advanced tracking system, ensuring visibility and accountability at every stage.</p>
                    </div>
                </div>
                {/* Right Image */}
                <div className="grid grid-cols-5 gap-1 mt-20">
                    <div>
                        <Batch>2</Batch>
                    </div>
                    <div className="col-span-2 -ml-10">
                        <h1 className="text-4xl font-semibold uppercase text-[#6558F5]">Centralized database</h1>
                        <p className="text-2xl mt-8">Store all asset-related information in one secure location for easy access and management.</p>
                    </div>
                    <div className="flex justify-center items-center col-span-2">
                        <img src={DatabaseImg} alt="database image" />
                    </div>
                </div>
                {/* Left Image */}
                <div className="grid grid-cols-5 gap-1 mt-20">
                    <div className="flex justify-center items-center col-span-2">
                        <img src={ReportImg} alt="custom report image" />
                    </div>
                    <div>
                        <Batch>3</Batch>
                    </div>
                    <div className="col-span-2 -ml-10">
                        <h1 className="text-4xl font-semibold uppercase text-[#6558F5]">Customizable Reporting</h1>
                        <p className="text-2xl mt-8">Generate customizable reports to gain insights into asset performance, utilization, and maintenance needs.</p>
                    </div>
                </div>
                {/* Right Image */}
                <div className="grid grid-cols-5 gap-1 mt-20">
                    <div>
                        <Batch>4</Batch>
                    </div>
                    <div className="col-span-2 -ml-10">
                        <h1 className="text-4xl font-semibold uppercase text-[#6558F5]">User-Friendly Interface</h1>
                        <p className="text-2xl mt-8">Our user-friendly interface makes asset management effortless for every member of your team, regardless of technical expertise..</p>
                    </div>
                    <div className="flex justify-center items-center col-span-2">
                        <img src={InterfaceImg} alt="user friendly image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;