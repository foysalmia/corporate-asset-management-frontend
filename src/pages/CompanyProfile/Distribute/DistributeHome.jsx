import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const DistributeHome = () => {
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        console.log(search);
    }

    return (
        <div className="mt-16">
            <div className="flex w-full max-w-lg items-center space-x-2 mx-auto">
                <Input onChange={(e) => setSearch(e.target.value)} type="email" placeholder="Search Distributed Assets here" />
                <Button onClick={handleSearch} className="bg-[#6558F5] hover:bg-[#3a338f]">Search</Button>
            </div>
            <div className="mt-5">
                <Table className="border border-gray-100">
                    <TableCaption className="mt-16 mb-3">A list of your organization's already distributed assets.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Asset Name</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Employee</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Provide Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Return Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Status</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Return</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Logitech Keyboard</TableCell>
                            <TableCell>Amit Sarkar</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-green-400">Free</TableCell>
                            <TableCell className="text-green-400">Take back</TableCell>
                        </TableRow>                        
                        <TableRow>
                            <TableCell className="font-medium">Logitech Keyboard</TableCell>
                            <TableCell>Amit Sarkar</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-green-400">Free</TableCell>
                            <TableCell className="text-red-400">Take back</TableCell>
                        </TableRow>                        
                        <TableRow>
                            <TableCell className="font-medium">Logitech Keyboard</TableCell>
                            <TableCell>Amit Sarkar</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-green-400">Free</TableCell>
                            <TableCell className="text-green-400">Take back</TableCell>
                        </TableRow>                        
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default DistributeHome;