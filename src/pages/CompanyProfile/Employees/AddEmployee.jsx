import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from "react";
import { getAuth } from "@/components/Context/GetContext";
import { employeeUrl } from "@/Utilies/Url";
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom';

const AddEmployee = () => {
    const [name,setName] = useState('');
    const [designation,setDesignation] = useState('');
    const [description,setDescription] = useState('');
    const [salary,setSalary] = useState('');
    const [join_date,setJoinDate] = useState();
    const accessToken = localStorage.getItem('accessToken');
    const {user} = getAuth();
    const navigate = useNavigate();
    const handleEmployeeAdd = (e) =>{
        e.preventDefault();
        const formData = {name,designation,description,salary,join_date,company:user.id};
        console.log(formData);
        fetch(employeeUrl,{
            method:'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(res => {
            if(res.status === 201){
                Swal.fire({
                    title: 'Success!',
                    text: `${name} added as an employee in your organization`,
                    icon: 'success',
                });
                navigate("/profile/employees");
            }
        })
    }

    return (
        <div className="mt-10  w-1/2 mx-auto">
            <h1 className="text-center font-semibold text-4xl">Join a New Employee</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your employee whom you want to join in your organization.</p>
            <form onSubmit={handleEmployeeAdd} >
                <div className='mt-5'>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                        type="text"
                        id="designation"
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Enter employee designation here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter employee description here"
                    />
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <input onChange={(e)=>setJoinDate(e.target.value)} className="p-1 w-2/3 border border-1 rounded-md" type="date"/>
                    <Input
                        type="number"
                        min={0}
                        id="name"
                        onChange={(e) => setSalary(e.target.value)}
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