import {
    TableCell,
    TableRow
} from "@/components/ui/table";

const EmployeeRow = ({employee}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.designation}</TableCell>
            <TableCell>{employee.join_date}</TableCell>
            <TableCell className="text-right">$ {employee.salary}</TableCell>
        </TableRow>
    );
};

export default EmployeeRow;