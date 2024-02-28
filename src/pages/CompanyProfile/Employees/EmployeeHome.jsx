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

const EmployeeHome = () => {
    return (
        <div className="mt-16">
            <div className="flex w-full max-w-lg items-center space-x-2 mx-auto">
                <Input type="email" placeholder="Search employee here" />
                <Button className="bg-[#6558F5] hover:bg-[#3a338f]">Search</Button>
            </div>
            <div className="mt-5">
                <Table className="border border-gray-100">
                    <TableCaption className="mt-16 mb-3">A list of your organization's employees.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-[#6558F5] font-semibold text-sm w-[100px]">ID</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Name</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Designation</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Join Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm text-right">Salary</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">01</TableCell>
                            <TableCell>Amit Sarkar</TableCell>
                            <TableCell>Sr Python Developer</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-right">$ 50,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">02</TableCell>
                            <TableCell>Ark Emon</TableCell>
                            <TableCell>Sr Software Engineer</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-right">$ 80,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">03</TableCell>
                            <TableCell>Foysal Ahmed</TableCell>
                            <TableCell>Jr Python Developer</TableCell>
                            <TableCell>15-2-2024</TableCell>
                            <TableCell className="text-right">$ 1,000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default EmployeeHome;