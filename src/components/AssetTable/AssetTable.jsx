import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const AssetTable = () => {
    return (
        <div className="mt-16">
            <div className="flex justify-between items-start">
                <h1 className="font-semibold text-3xl">Assets</h1>
                <div className="flex items-center">
                    <div className="flex w-full max-w-lg items-center space-x-2 mr-3">
                        <Input type="email" placeholder="Search assets here" />
                        <Button className="bg-[#6558F5] hover:bg-[#3a338f]" type="submit">Search</Button>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px] bg-[#6558F5] text-white">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="free">Free</SelectItem>
                            <SelectItem value="distributed">Distributed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="mt-5">
                <Table className="border border-gray-100">
                    <TableCaption className="mt-16 mb-3">A list of your organization's assets.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-[#6558F5] font-semibold text-sm w-[100px]">ID</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Name</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Price</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Buy Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Warrenty Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">01</TableCell>
                            <TableCell>Samsung Monitor</TableCell>
                            <TableCell>$ 1500</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell>25-2-2025</TableCell>
                            <TableCell className="text-red-400 font-semibold">Distributed</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">02</TableCell>
                            <TableCell>Samsung Monitor</TableCell>
                            <TableCell>$ 1500</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell>25-2-2025</TableCell>
                            <TableCell className="text-green-500 font-semibold">Free</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default AssetTable;