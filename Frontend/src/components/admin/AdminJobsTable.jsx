import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const AdminJobsTable = () => {
    const navigate = useNavigate();
    const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    useEffect(() => {
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption>List of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className={'text-right'}>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        // Check if companies exists and has length
                        !allAdminJobs || allAdminJobs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    You haven't registered any companies yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filterJobs.map((job) => {
                                return (
                                    <TableRow key={job._id}>
                                        <TableCell>{job?.company?.name}</TableCell>
                                        <TableCell>{job?.title}</TableCell>
                                        <TableCell>{new Date(job.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <Popover>
                                                <PopoverTrigger><MoreHorizontal className='cursor-pointer' /></PopoverTrigger>
                                                <PopoverContent className='w-32 bg-white border rounded-md shadow-md p-2'>
                                                    <div onClick={() => { navigate(`/admin/jobs/create`) }} className='flex items-center gap-2 w-fit cursor-pointer hover:bg-gray-100 p-1 rounded-sm'>
                                                        <Edit2 className='w-4 h-4' />
                                                        <span>Edit</span>
                                                    </div>
                                                    <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                        <Eye className='w-4'/>
                                                        <span>Applicants</span>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable;