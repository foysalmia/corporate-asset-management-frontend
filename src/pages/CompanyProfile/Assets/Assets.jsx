import { Button } from '@/components/ui/button';
import {Link, Outlet} from 'react-router-dom'
const Assets = () => {
    return (
        <div className="mt-5 px-5">
            <div className="flex justify-between items-start">
                <h1 className="text-3xl font-semibold">Manage Assets</h1>
                <div>
                    <Link to="/profile/assets/distribute"><Button className="bg-white hover:bg-[#6558F5] hover:text-white text-[#6558F5] drop-shadow-md mr-2">Distribute</Button></Link>
                    <Link to="/profile/assets/add-asset"><Button className="bg-[#6558F5] hover:bg-white hover:text-[#6558F5] drop-shadow-md">Add Asset</Button></Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Assets;