import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
    return (
        <div className='p-5 rounded-lg shadow-xl bg-white border border-gray-100 cursor-pointer hover:scale-105 transition-transform duration-250'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-medium text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center mt-4 gap-2'>
                <Badge className="text-blue-700 font-bold " variant={"ghost"}>12 Positons</Badge>
                <Badge className="text-[#F83002] font-bold " variant={"ghost"}>Part Time</Badge>
                <Badge className="text-[#7209b7] font-bold " variant={"ghost"}>24LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards