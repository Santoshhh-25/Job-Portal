import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2 } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Home</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={'text-right'}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png">

              </AvatarImage>
            </Avatar>
          </TableCell>
          <TableCell>Company name</TableCell>
          <TableCell>date</TableCell>
          <TableCell>
            <Popover>
              <PopoverTrigger>MoreHorixontal</PopoverTrigger>
              <PopoverContent className='w-32'>
                <div>
                  <Edit2>
                    <span>
                      Edit
                    </span>
                  </Edit2>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable