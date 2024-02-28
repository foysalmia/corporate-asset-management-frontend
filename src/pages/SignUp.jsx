import { useState } from 'react';
import SignInImg from "../assets/register.png"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [description,setDescription] = useState('');
    const [password,setPassword] = useState('');
    const [agree,setAgree] = useState(false);

    const handleSignIn = () =>{
        console.log(name,email,description,password,agree);
    }
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className='mx-auto w-2/3'>
                <h1 className='font-semibold text-3xl pt-10'>Get Started Now</h1>
                <p className='text-gray-800 text-xs mt-3'>Enter your credentials to access your company account</p>
                <div> 
                    <div className='mt-10'>
                        <Label htmlFor="name">Company Name</Label>
                        <Input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Company Name"
                        />
                    </div>
                    <div className='mt-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Company Email"
                        />
                    </div>
                    <div className='mt-2'>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            type="text"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter your Company Details"
                        />
                    </div>
                    <div className='mt-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Company Password"
                        />
                    </div>
                    <div className='mt-3 flex items-center'>
                        <Checkbox onCheckedChange={(e)=>setAgree(e)} value="test" id="agree"/>
                        <label
                            htmlFor="agree"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                        >
                             I agree to the terms and conditions
                        </label>
                    </div>
                    {
                        agree ? <Button className="w-full mt-5 bg-[#6558F5] hover:bg-[#372DA6]" onClick={handleSignIn}>Get Started</Button> :
                            <AlertDialog>
                                <AlertDialogTrigger 
                                    className='w-full mt-5 bg-[#6558F5] hover:bg-[#372DA6] py-2 rounded-md text-white'>Get Started</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>You must be agreed with our terms and conditions.</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogDescription>
                                        Please checked the box and agreed with our terms and conditions.We respect your decission and have a look to the terms and conditons.
                                    </AlertDialogDescription>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                    }
                    <p className='mt-5 text-center text-xs text-gray-900'>Already have an account ? <Link to="/login" className='text-[#6558F5]'>Sign In</Link></p>
                </div>

            </div>
            <div className='bg-[#6558F5] h-screen px-10 py-10 flex flex-col justify-between'>
                <div>
                    <h1 className='text-white font-semibold text-3xl'>The Simplest way to manage <br />your company assets</h1>
                    <p className='text-white text-xs mt-3'>Enter your credentials to access your company account</p>
                </div>
                <div className='w-1/2 h-1/2 -mt-3 ml-16'>
                    <img src={SignInImg} alt="this is the sing in image" />
                </div>
                <div className='flex justify-between items-center text-white'>
                    <h1 className="font-bold">Booking.com</h1>
                    <h1 className="font-bold">Facebook</h1>
                    <h1 className="font-bold">Google</h1>
                    <h1 className="font-bold">Netflix</h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;