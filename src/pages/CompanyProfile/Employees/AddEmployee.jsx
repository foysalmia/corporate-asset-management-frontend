import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import DatePicker from "@/components/DatePicker/DatePicker";

const AddEmployee = () => {
    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-4xl">Join a New Employee</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your employee whom you want to join in your organization.</p>
            <form>
                <div className='mt-5'>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                        type="text"
                        id="designation"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee designation here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="description"
                        // onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter employee description here"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <DatePicker text="Joining Date" />
                    <Input
                        type="number"
                        min={0}
                        id="name"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee Salary here"
                        className="ml-2"
                    />
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Add Employee</Button>
            </form>
        </div>
    );
};

export default AddEmployee;