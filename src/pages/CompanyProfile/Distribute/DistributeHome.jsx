/* eslint-disable react-hooks/exhaustive-deps */
import { distributeUrl } from "@/Utilies/Url";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import DistributeRow from "./DistributeRow";
import { getAuth } from "@/components/Context/GetContext";
import {useNavigate} from 'react-router-dom';

const DistributeHome = () => {
    const accessToken = localStorage.getItem("accessToken");
    const [search, setSearch] = useState('');
    const [distributes,setDistributes] = useState([]);
    const [sort, setSort] = useState('id');
    const {setUser} = getAuth();
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search) {
            const sorted = distributes.filter(data => data.asset.name.toLowerCase().includes(search.toLocaleLowerCase()));
            setDistributes(sorted);
        }
    }

    useEffect(()=>{
        fetch(distributeUrl + `?sort=${sort}`, {
            method : "GET",
            headers : {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if (res.status == 401) {
                setUser({});
                navigate('/login');
            }
            return res.json();
        })
        .then(data => setDistributes(data))
    },[search,sort])

    if(!distributes.length){
        return <Loader/>;
    }

    return (
        <div className="mt-16">
            <div className="flex w-full max-w-lg items-center space-x-2 mx-auto">
                <Input onChange={(e) => setSearch(e.target.value)} type="email" placeholder="Search Distributed Assets here" />
                <Button onClick={handleSearch} className="bg-[#6558F5] hover:bg-[#3a338f]">Search</Button>

                <Select onValueChange={(e) => setSort(e)}>
                    <SelectTrigger className="w-[180px] bg-[#6558F5] text-white">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="returned">Status</SelectItem>
                        <SelectItem value="provide_date">Provide Date</SelectItem>
                        <SelectItem value="return_date">Return Date</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-5">
                <Table className="border border-gray-100">
                    <TableCaption className="mt-16 mb-3">{
                        distributes.length ? "A list of your organization's already distributed assets."
                        : "There is no distributed asset."
                    }</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Asset Name</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Employee</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Provide Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Return Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Status</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            distributes.map(data => <DistributeRow data={data} key={data.id} />)
                        }                       
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default DistributeHome;