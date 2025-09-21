import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Form, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const PostJobs = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        Position: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() == value);
        setInput({ ...input, companyId: selectedCompany._id });
    }

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/postjob`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            });
            if (res.data.success) {

                toast.success(res.data.msg);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>

                <Form onSubmit={submitHandler} className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-md'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type={'text'}
                                value={input.title}
                                onChange={changeEventHandler}
                                name="title"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type={'text'}
                                value={input.description}
                                onChange={changeEventHandler}
                                name="description"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type={'text'}
                                value={input.requirements}
                                onChange={changeEventHandler}
                                name="requirements"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type={'text'}
                                value={input.salary}
                                onChange={changeEventHandler}
                                name="salary"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type={'text'}
                                value={input.location}
                                onChange={changeEventHandler}
                                name="location"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>JobType</Label>
                            <Input
                                type={'text'}
                                value={input.jobType}
                                onChange={changeEventHandler}
                                name="jobType"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>Experience Level</Label>
                            <Input
                                type={'text'}
                                value={input.experience}
                                onChange={changeEventHandler}
                                name="experience"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        <div>
                            <Label>No. of Positions</Label>
                            <Input
                                type={'number'}
                                value={input.Position}
                                onChange={changeEventHandler}
                                name="Position"
                                className={'focus-visible:ring-offset-0 my-1'}
                            />
                        </div>
                        {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            companies.map((company) => (
                                                <SelectItem
                                                    key={company._id}
                                                    value={company?.name?.toLowerCase()}
                                                >
                                                    {company?.name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            )
                        }
                    </div>
                    {
                        loading ?
                            <Button disabled className="w-full my-4">
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Posting Job...
                            </Button> :
                            <Button type="submit" className="w-full my-4 cursor-pointer">
                                Post New Job
                            </Button>
                    }
                    {
                        companies.length === 0 &&
                        <p className='text-sm text-red-600 font-bold text-center my-3'>
                            *Please register a company first before posting a job
                        </p>
                    }
                </Form>

            </div>
        </div>
    )
}

export default PostJobs