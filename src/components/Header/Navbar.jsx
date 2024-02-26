import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div className="mx-8 py-5 rounded-md bg-white flex justify-between px-5">
            <h1 className="text-3xl font-bold"><Link to="/">Asset<span className="text-[#6558F5]">Pulse</span></Link></h1>
            <Link to="/register"><Button className="bg-[#6558F5] hover:bg-[#342d81]">Sign Up</Button></Link>
        </div>
    );
};

export default Navbar;