import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import DatePicker from "../DatePicker/DatePicker";

const AddAssets = () => {
    return (
        <AlertDialog >
            <AlertDialogTrigger className="bg-[#6558F5] px-3 py-2 text-white rounded-md">Add Assets</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">Add a new Asset</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    
                    <Input
                        type="text"
                        id="name"
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Asset Name "
                    />
                    <Textarea
                        type="text"
                        id="description"
                        className="mt-2"
                        // onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Asset Description"
                    />
                    <div className="mt-2 flex justify-between items-center">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Categorie" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            className="w-2/3 ml-2"
                            min={0}
                            type="number"
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="$ Asset Price "
                        />
                    </div>
                    
                    <DatePicker/>
                    <DatePicker/>
                   
                    

                    
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={()=>console.log("device added")}>Add</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
};

export default AddAssets;