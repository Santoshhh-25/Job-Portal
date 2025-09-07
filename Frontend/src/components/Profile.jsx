import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'

const skills = ["Html", "css", "js", "reactjs"];

const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className={'h-20 w-20'}>
              <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png">
              </AvatarImage>
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, excepturi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, doloremque.</p>
            </div>
          </div>
          <Button className="text-right" variant="outline"><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2 '>
            <Mail />
            <span>email@gamil.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>1234567891</span>
          </div>
        </div>
        <div className='my-5'>
          <h1 className='font-medium text-lg'>Skills</h1>
          <div className='flex items-center gap-1'>
            {
              skills.length != 0 ? skills.map((item, index) => <Badge variant={'outline'} key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className={'text-md font-bold'}>Resume</Label>

          {
            isResume ? <a  className=" text-blue-500 hover:underline cursor-pointer" target='blank' href='https://youtube.com'>Resume link</a> : <span>NA</span>

          }
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1>Applied Jobs</h1>
          {/* Application table */}

        </div>
      </div>
    </div>
  )
}

export default Profile