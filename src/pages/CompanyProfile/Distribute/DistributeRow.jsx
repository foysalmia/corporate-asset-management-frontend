import { TableCell, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

const DistributeRow = ({data}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{data.asset.name}</TableCell>
            <TableCell>{data.employee.name}</TableCell>
            <TableCell>{data.provide_date}</TableCell>
            <TableCell>{data.return_date}</TableCell>
            {
                data.status == "Free" ? <TableCell className="text-green-400 font-semibold">Free</TableCell>
                    : data.status == "Using" ? <TableCell className="text-[#6558F5] font-semibold">Using</TableCell>
                        : <TableCell className="text-orange-400 font-semibold">Due to return</TableCell>
            }
            <TableCell className="text-green-400 text-xs">
                <Link to={`/profile/distribute/${data.id}`}>Check Details</Link>
            </TableCell>
        </TableRow>
    );
};

export default DistributeRow;