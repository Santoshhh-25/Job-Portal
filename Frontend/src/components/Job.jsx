import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
    const jobId = "lkcndvievppevor"
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant={'outline'} className="rounded-full" size="icon"><Bookmark></Bookmark></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className={'p-6'} variant={'outline'} size={'icon'}>
                    <Avatar>
                        <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png">

                        </AvatarImage>
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem. Ipsum repellat facere nisi sequi alias vitae laudantium distinctio consequatur.</p>
            </div>
            <div className=' flex items-center mt-4 gap-2'>
                <Badge className="text-blue-700 font-bold " variant={"ghost"}>12 Positons</Badge>
                <Badge className="text-[#F83002] font-bold " variant={"ghost"}>Part Time</Badge>
                <Badge className="text-[#7209b7] font-bold " variant={"ghost"}>24LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant={'outline'} onClick={() => navigate(`/description/${jobId}`)} className='cursor-pointer'>Details</Button>
                <Button className={'bg-[#7209b7] hover:bg-[#540887] cursor-pointer'}>Save for Later</Button>

            </div>
        </div>
    )
}

export default Job