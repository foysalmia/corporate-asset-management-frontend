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

const DistributeAsset = () => {
    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-3xl">Distribute Assets in Employee</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your asset which you want to include in your organization.</p>
            <form>
                <div className='mt-5'>
                    <Select >
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
                    <Select >
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
                    <Label htmlFor="description">Providing Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="description"
                        // onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter asset condition when you provide that to your trusted employee."
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Return Asset Condition</Label>
                    <Textarea
                        type="text"
                        id="description"
                        // onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter asset condition when you collect that from your trusted employee."
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <DatePicker text="Providing Date" />
                    <DatePicker text="Return Date" />
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Distribute</Button>
            </form>
        </div>
    );
};

export default DistributeAsset;