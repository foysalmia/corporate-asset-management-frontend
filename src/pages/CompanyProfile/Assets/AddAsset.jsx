import {useState} from 'react';
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
import { getAuth } from '@/components/Context/GetContext';
import { assetUrl } from '@/Utilies/Url';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from '@/components/DatePicker/DatePicker';
import { formateDate } from '@/Utilies/DateFormat';

const AddAsset = () => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState(0);
    const [buyDate,setBuyDate] = useState();
    const [warrentyDate,setWarrentyDate] = useState();
    const {user} = getAuth();
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = { name, description, price, buy_date: formateDate(buyDate), warranty: formateDate(warrentyDate),category,company:user.id};
        fetch(assetUrl,{
            method:'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(res =>{
            if(res.status == 201){
                Swal.fire(`${name} is added successfully in your organization.`,"","success");
                navigate("/profile/assets");
            }else{
                Swal.fire("Did not added !!","","error");
                navigate('/login');
            }
        })
    }

    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-4xl">Include a New Asset</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your asset which you want to include in your organization.</p>
            <form onSubmit={handleSubmit} >
                <div className='mt-5'>
                    <Label htmlFor="name">Asset Name</Label>
                    <Input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter asset name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter asset's description"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <Select onValueChange={(e)=>setCategory(e)}>
                        <SelectTrigger >
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Monitor</SelectItem>
                            <SelectItem value="2">Laptop</SelectItem>
                            <SelectItem value="3">Keyboard</SelectItem>
                            <SelectItem value="4">Mouse</SelectItem>
                            <SelectItem value="5">Printer</SelectItem>
                            <SelectItem value="6">Mobile</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        type="number"
                        min={0}
                        id="name"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter asset Price here"
                        className="ml-2"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">   
                    <DatePicker text="Buying Date" date={buyDate} setDate={setBuyDate} />
                    <DatePicker text="Warrenty Date" date={warrentyDate} setDate={setWarrentyDate} />   
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Add Asset</Button>
            </form>
        </div>
    );
};

export default AddAsset;