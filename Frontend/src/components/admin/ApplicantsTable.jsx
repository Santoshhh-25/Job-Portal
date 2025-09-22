import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector(store => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <div>
      <Table>
        <TableCaption> A list of recent applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={'text-right'}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            applicants && applicants?.application?.map((item) => (
              <tr key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                  {

                    item.applicant?.profile?.resume ? <a className={'text-blue-600'} href={item?.applicant?.profile?.resume} target='_blank'>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                  }
                </TableCell>
                <TableCell>{item?.applicant?.createdAt.split("T")[0]}</TableCell>
                <TableCell className={'float-right'}>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className='cursor-pointer' />
                    </PopoverTrigger>
                    <PopoverContent className={'w-32'}>
                      {
                        shortlistingStatus.map((status, index) => {
                          return (
                            <div key={index} className='flex w-fit my-2 items-center cursor-pointer' onClick={() => { statusHandler(status, item?._id) }}>
                              <span>{status}</span>
                            </div>
                          )
                        })
                      }
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))
          }

        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable