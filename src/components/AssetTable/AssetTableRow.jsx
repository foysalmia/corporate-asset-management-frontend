import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const AssetTableRow = ({asset}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{asset.id}</TableCell>
            <TableCell>{asset.name}</TableCell>
            <TableCell>{asset.category.name}</TableCell>
            <TableCell>{asset.buy_date}</TableCell>
            <TableCell>{asset.warranty}</TableCell>
            <TableCell className="text-right">${asset.price}</TableCell>
            <TableCell className="text-center flex justify-center"> 
                <Link to={`/profile/assets/${asset.id}`} className="flex justify-center items-center bg-slate-100 p-2 w-1/3 rounded-md">
                    <TbListDetails size={25} color="#6558F5" />
                </Link>
            </TableCell>
        </TableRow>
    );
};

export default AssetTableRow;