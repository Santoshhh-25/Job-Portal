import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData = [
    {
        filterType: "Location",
        array: ["Mumbai", "Delhi", "Pune", "Bangalore"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salaray",
        array: ["0-40k", "41-1L", "1Lakh to 5Lakh",]
    }
]
const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <div className='font-bold text-lg'>Filter Jobs</div>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className='flex items-center space-x-2 m-2'>
                                            <RadioGroupItem value={item}></RadioGroupItem>
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>

    )
}

export default FilterCard