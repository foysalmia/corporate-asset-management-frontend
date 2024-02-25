import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div className="mx-8 py-5 rounded-md bg-white flex justify-between px-5">
            <h1 className="text-3xl font-bold">Asset<sapn className="text-[#6558F5]">Pulse</sapn></h1>
            <Button>Sign Up</Button>
        </div>
    );
};

export default Navbar;