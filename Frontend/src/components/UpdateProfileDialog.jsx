import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map(skill => skill),
        file: user?.profile?.resume
    });
const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]:e.target.value})
}
const submitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
        formData.append("file", input.file);
    }
    try {
        const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            },
            withCredentials:true
        });
        if(res.data.success){
            dispatch(setUser(res.data.user));
            toast.success(res.data.msg);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
    }
    setOpen(false);
    console.log(input);
    
}
const fileChangeHandler = (e) =>{
    const file = e.target.files?.[0];
    setInput({...input, file})
}
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className={'sm:max-w-[425px]'} onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='name'>Name</Label>
                                <Input id="name" className={'col-span-3'} name="fullname" type={'text'} value={input.fullname} onChange={changeEventHandler}></Input>
                            </div>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='email'>Email</Label>
                                <Input id="email" className={'col-span-3'} name="email" type="email" value={input.email} onChange={changeEventHandler}></Input>
                            </div>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='phoneNumber'>PhoneNumber</Label>
                                <Input id="number" className={'col-span-3'} name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler}></Input>
                            </div>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='bio'>Bio</Label>
                                <Input id="bio" className={'col-span-3'}  type="text" name="bio" value={input.bio} onChange={changeEventHandler}></Input>
                            </div>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='skills'>skills</Label>
                                <Input id="skills" className={'col-span-3'} name="skills" type={'text'} value={input.skills} onChange={changeEventHandler}></Input>
                            </div>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label className={'text-right'} htmlFor='file'>Resume</Label>
                                <Input id="file" className={'col-span-3'} name="file" type={'file'} accept='application/pdf' onChange={fileChangeHandler}></Input>
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>Please wait</Button> : <Button type="submit" className="w-full my-4 cursor-pointer">Update</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog