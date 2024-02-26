import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="mt-8 bg-[#372DA6] py-11">
            <h1 
                className="text-center text-white flex justify-center items-center mb-8">All Right Reserved to
                <a 
                    target="_blank" 
                    className="ml-2 underline underline-offset-2 text-[#e2e2e2]" 
                    href="https://www.linkedin.com/in/md-foysal-ahmed/"> 
                        Md Foysal Ahmed
                </a> 
                <AiOutlineCopyright  className="mx-2"/>  
                2024
            </h1>
        </div>
    );
};

export default Footer;