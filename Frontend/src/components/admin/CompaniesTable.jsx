import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar'; // Corrected import for AvatarImage
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
  const navigate = useNavigate();
  const { companies, searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(() =>{
    const filteredCompany = companies.length >= 0 && companies.filter((company) =>{
      if(!searchCompanyByText){
        return true;
      };
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText])
  return (
    <div>
      <Table>
        <TableCaption>List of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead> 
            <TableHead>Date</TableHead>
            <TableHead className={'text-right'}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            // Check if companies exists and has length
            !companies || companies.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  You haven't registered any companies yet.
                </TableCell>
              </TableRow>
            ) : (
                filterCompany.map((company) => {
                return (
                  <TableRow key={company._id}> 
                    <TableCell>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={company.logo || "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png"} />
                      </Avatar>
                    </TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{new Date(company.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Popover>
                        <PopoverTrigger><MoreHorizontal className='cursor-pointer' /></PopoverTrigger>
                        <PopoverContent className='w-32 bg-white border rounded-md shadow-md p-2'> 
                          <div onClick={()=>{navigate(`/admin/companies/${company._id}`)}} className='flex items-center gap-2 w-fit cursor-pointer hover:bg-gray-100 p-1 rounded-sm'>
                            <Edit2 className='w-4 h-4' />
                            <span>Edit</span>
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

export default CompaniesTable;