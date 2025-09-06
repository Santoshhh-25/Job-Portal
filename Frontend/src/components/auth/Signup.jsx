import React from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
export const Signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action=""  className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-1xl mb-5'>Signup</h1>
                    <div className='my-2'>
                        <Label>Full name</Label>
                        <Input type="text" placeholder="Enter your name "></Input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;