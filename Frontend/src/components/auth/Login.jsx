import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import store from '@/redux/store';

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    file: ""
  })//(store => store.auth)
  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const disptach = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      disptach(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);

    } finally {
      disptach(setLoading(false));
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className=' flex justify-center font-bold text-1xl mb-5'>Login</h1>

          <div className='my-2'>
            <Label className="my-2">Emal</Label>
            <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="Enter your email "></Input>
          </div>

          <div className='my-2'>
            <Label className="my-2">Password</Label>
            <Input type="text" value={input.password} name="password" onChange={changeEventHandler} placeholder="Enter your password "></Input>
          </div>
          <div className='flex items-center justify-between my-5'>
            <RadioGroup className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer" checked={input.role === 'student'} onChange={changeEventHandler}></Input>
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter" className="cursor-pointer" checked={input.role === 'recruiter'} onChange={changeEventHandler}></Input>
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>Please wait</Button> : <Button type="submit" className="w-full my-4 cursor-pointer">Login</Button>
          }
          <span className='text-sm'>Create an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login;