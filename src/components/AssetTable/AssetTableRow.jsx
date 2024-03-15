import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const AssetTableRow = ({asset}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{asset.id}</TableCell>
            <TableCell>{asset.name}</TableCell>
            <TableCell>{asset.category.name}</TableCell>
            <TableCell>${asset.price}</TableCell>
            <TableCell>{asset.buy_date}</TableCell>
            <TableCell>{asset.warranty}</TableCell>
            <TableCell className="text-[#6558F5]"> 
                <Link to={`/profile/assets/${asset.id}`} className="bg-gray-100 py-2 px-3 rounded-md">view details</Link>
            </TableCell>
        </TableRow>
    );
};

export default AssetTableRow;