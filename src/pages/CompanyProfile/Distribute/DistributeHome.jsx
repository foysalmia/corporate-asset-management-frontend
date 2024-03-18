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
import { useEffect, useState } from "react";
import DistributeRow from "./DistributeRow";

const DistributeHome = () => {
    const accessToken = localStorage.getItem("accessToken");
    const [search, setSearch] = useState('');
    const [distributes,setDistributes] = useState([]);

    const handleSearch = () => {
        console.log(search);
    }

    useEffect(()=>{
        fetch(distributeUrl,{
            method : "GET",
            headers : {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => setDistributes(data))
    },[])

    if(!distributes.length){
        return <Loader/>;
    }

    return (
        <div className="mt-16">
            <div className="flex w-full max-w-lg items-center space-x-2 mx-auto">
                <Input onChange={(e) => setSearch(e.target.value)} type="email" placeholder="Search Distributed Assets here" />
                <Button onClick={handleSearch} className="bg-[#6558F5] hover:bg-[#3a338f]">Search</Button>
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
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Return</TableHead>
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