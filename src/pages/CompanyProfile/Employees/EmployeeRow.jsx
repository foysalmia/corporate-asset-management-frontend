import {
    TableCell,
    TableRow
} from "@/components/ui/table";
import {Link} from 'react-router-dom';
import { BiSolidUserDetail } from "react-icons/bi";

const EmployeeRow = ({employee}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.designation}</TableCell>
            <TableCell>{employee.join_date}</TableCell>
            <TableCell className="text-right">$ {employee.salary}</TableCell>
            <TableCell className="text-center flex justify-center">
                <Link className="flex justify-center items-center bg-slate-100 p-2 w-1/3 rounded-md"><BiSolidUserDetail size={25} color="#6558F5"/></Link>
            </TableCell>
        </TableRow>
    );
};

export default EmployeeRow;