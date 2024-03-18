import { getAuth } from "@/components/Context/GetContext";
import { Button } from "@/components/ui/button";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

const SignOut = () => {
    const {user,setUser} = getAuth();
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("accessToken");
        setUser({});
        Swal.fire("Successfully Logged Out from your account.","","success");
        navigate("/login");
    }

    return (
        <div className="mt-5 w-2/3 mx-auto flex flex-col items-center justify-center my-auto">
            <h1 className="text-3xl font-semibold text-center">Are you sure to sign out from <span className="text-[#6558F5]">{user.name}</span> ?</h1>
            <Button onClick={handleLogout} className="bg-red-800 text-center mt-5">Sign Out</Button>
        </div>
    );
};

export default SignOut;