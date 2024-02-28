import { Input } from "@/components/ui/input";
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


const AddAsset = () => {
    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-4xl">Include a New Asset</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your asset which you want to include in your organization.</p>
            <form>
                <div className='mt-5'>
                    <Label htmlFor="name">Asset Name</Label>
                    <Input
                        type="text"
                        id="name"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter asset name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="description"
                        // onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter asset's description"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <Select >
                        <SelectTrigger >
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        type="number"
                        min={0}
                        id="name"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter asset Price here"
                        className="ml-2"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <DatePicker text="Buying Date"/>
                    <DatePicker text="Warrenty Date"/>
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Add Asset</Button>
            </form>
        </div>
    );
};

export default AddAsset;