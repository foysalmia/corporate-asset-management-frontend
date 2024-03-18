import { employeeUrl } from "@/Utilies/Url";
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
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import EmployeeRow from "./EmployeeRow";
import Loader from "@/components/Loader/Loader";
import { getAuth } from "@/components/Context/GetContext";
import { useNavigate } from 'react-router-dom';

const EmployeeHome = () => {
    const [sort,setSort] = useState('id');
    const [search,setSearch] = useState('');
    const [employees,setEmployees] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const { setUser } = getAuth();
    const navigate = useNavigate();
    
    const handleSearch = () =>{
        if(search){
            const sorted = employees.filter(employee => employee.name.toLowerCase().includes(search.toLocaleLowerCase()));
            setEmployees(sorted);
        }
    }

    useEffect(()=>{
        fetch(employeeUrl + `?sort=${sort}`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.status == 401) {
                    setUser({});
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => setEmployees(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search,sort]);

    if(!employees.length){
        return <Loader/>;
    }

    return (
        <div className="mt-16">
            <div className="flex w-full max-w-lg items-center space-x-2 mx-auto">
                <Input onChange={(e)=>setSearch(e.target.value)} type="email" placeholder="Search employee here" />
                <Button onClick={handleSearch} className="bg-[#6558F5] hover:bg-[#3a338f]">Search</Button>
                <Select onValueChange={(e) => setSort(e)}>
                    <SelectTrigger className="w-[180px] bg-[#6558F5] text-white">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="salary">Salary</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="designation">Designation</SelectItem>
                        <SelectItem value="join_date">Join Date</SelectItem>
                    </SelectContent>
                </Select>
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
                            <TableHead className="text-[#6558F5] font-semibold text-sm text-center">View Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {
                        employees.map(employee => <EmployeeRow employee={employee} key={employee.id}/>)
                    }
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default EmployeeHome;