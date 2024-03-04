import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router-dom'

const Distribute = () => {
    return (
        <div className="mt-5 px-5">
            <div className="flex justify-between items-start">
                <h1 className="text-3xl font-semibold">Distribute Assets</h1>
                <div>
                    <Link to="/profile/distribute/distribute-asset"><Button className="bg-[#6558F5] hover:bg-white hover:text-[#6558F5] drop-shadow-md">Distribute</Button></Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Distribute;