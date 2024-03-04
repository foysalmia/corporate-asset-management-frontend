import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DatePicker from "@/components/DatePicker/DatePicker";
import { useState } from "react";

const DistributeAsset = () => {
    const [asset,setAsset] = useState("");
    const [employee,setEmployee] = useState("");
    const [provideCondition,setProvideCondition] = useState("");
    const [returnCondition,setReturnCondition] = useState("");
    const [provideDate,setProvideDate] = useState("");
    const [returnDate,setReturnDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(asset,employee);
        console.log(provideCondition,returnCondition);
        console.log(provideDate);
        console.log(returnDate);
    }

    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-3xl">Distribute Assets in Employee</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the credentials to distribute an asset to a currently working employee of your organization.</p>
            <form onSubmit={handleSubmit} >
                <div className='mt-5'>
                    <Select onValueChange={(e)=>setAsset(e)}>
                        <SelectTrigger >
                            <SelectValue placeholder="Select Asset" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-2'>
                    <Select onValueChange={(e)=>setEmployee(e)} >
                        <SelectTrigger >
                            <SelectValue placeholder="Select Employee" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-2'>
                    <Label htmlFor="ptdescription">Providing Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="ptdescription"
                        onChange={(e) => setProvideCondition(e.target.value)}
                        placeholder="Enter asset condition when you provide that to your trusted employee."
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="rtdescription">Return Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="rtdescription"
                        onChange={(e) => setReturnCondition(e.target.value)}
                        placeholder="Enter asset condition when you collect that from your trusted employee."
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <DatePicker text="Providing Date" date={provideDate} setDate={setProvideDate} />
                    <DatePicker text="Return Date" date={returnDate} setDate={setReturnDate} />
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Distribute</Button>
            </form>
        </div>
    );
};

export default DistributeAsset;