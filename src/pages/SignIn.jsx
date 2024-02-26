import { useState } from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import SignImg from "../assets/signin.png";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = () =>{
        console.log(email,password);

    }

    return (
        <div className="grid grid-cols-3 gap-3">
            <div className='relative'>
                <img className='h-screen' src={SignImg} alt="sing in image" />
                <div className='absolute left-12 top-16 text-center'>
                    <h1 className='text-white font-semibold text-4xl text center'>Corporate Asset<br/>Management</h1>
                </div>
            </div>
            <div className='col-span-2 w-1/2 ml-5'>
                <div className='mt-16 '>
                    <h1 className='font-bold text-4xl'>Sign In</h1>
                    <p className='mt-5 text-xl text-gray-900'>Enter details to login to your account</p>
                    <div className='mt-10'>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            type="email" 
                            id="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            placeholder="Enter your email address" 
                        />
                    </div>
                    <div className='mt-3'>
                        <Label className="" htmlFor="password">Password</Label>
                        <Input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <Button className="mt-5 w-full" onClick={handleLogin}> Sign In</Button>
                    <h1 className='text-center text-xs mt-10'>Don’t have an account ? <Link className='text-[#6558F5]' to="/register">Sign Up</Link> </h1>
                </div>
                <h1
                    className="text-center text-xs text-gray-800 flex justify-center items-center mt-[100px]">All Right Reserved to
                    <a
                        target="_blank"
                        className="ml-2 underline underline-offset-2 text-[#6558F5]"
                        href="https://www.linkedin.com/in/md-foysal-ahmed/">
                        Md Foysal Ahmed
                    </a>
                    <AiOutlineCopyright className="mx-2" />
                    2024
                </h1>
            </div>
        </div>
    );
};

export default SignIn;