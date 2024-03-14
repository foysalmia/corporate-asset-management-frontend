/* eslint-disable react-hooks/exhaustive-deps */
import { assetUrl } from "@/Utilies/Url";
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
import AssetTableRow from "./AssetTableRow";

const AssetTable = () => {
    const [sort,setSort] = useState('');
    const [search,setSearch] = useState('');
    const [assets,setAssets] = useState([]);
    const accessToken = localStorage.getItem("accessToken");
    
    const handleSearch = () =>{
        console.log(search,sort);
    };

    useEffect(()=>{
        fetch(assetUrl,{
            method:'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data =>setAssets(data))
        
    },[])

    return (
        <div className="mt-16">
            <div className="flex justify-between items-start">
                <h1 className="font-semibold text-3xl">Assets</h1>
                <div className="flex items-center">
                    <div className="flex w-full max-w-lg items-center space-x-2 mr-3">
                        <Input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search assets here" />
                        <Button className="bg-[#6558F5] hover:bg-[#3a338f]" onClick={handleSearch} >Search</Button>
                    </div>
                    <Select onValueChange={(e)=>setSort(e)}>
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
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Category</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Price</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Buy Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">Warrenty Date</TableHead>
                            <TableHead className="text-[#6558F5] font-semibold text-sm ">View Detail</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            assets.map(asset => <AssetTableRow asset={asset} key={asset.id} />)
                        }
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default AssetTable;