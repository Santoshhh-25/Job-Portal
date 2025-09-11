import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lkcndvievppevor"

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{calculateDays(job?.createdAt) == 0 ? "Today" : `${calculateDays(job?.createdAt)} days ago`} </p>
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
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>{job?.location}</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600 '>{job?.description}</p>
            </div>
            <div className=' flex items-center mt-4 gap-2'>
                <Badge className="text-blue-700 font-bold " variant={"ghost"}>{job?.jobPosition}</Badge>
                <Badge className="text-[#F83002] font-bold " variant={"ghost"}>{job?.jobType}</Badge>
                <Badge className="text-[#7209b7] font-bold " variant={"ghost"}>{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant={'outline'} onClick={() => navigate(`/description/${job?._id}`)} className='cursor-pointer'>Details</Button>
                <Button className={'bg-[#7209b7] hover:bg-[#540887] cursor-pointer'}>Save for Later</Button>

            </div>
        </div>
    )
}

function calculateDays(createdAt) {
    const createdDate = new Date(createdAt);
    const now = new Date();

    const diffTime = Math.abs(now - createdDate); // difference in milliseconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert ms → days

    return diffDays;
}

export default Job