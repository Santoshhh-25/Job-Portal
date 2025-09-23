import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setsearchedQuery } from '@/redux/jobSlice'
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
    const [ selectedValue, setSelectedValue]  = useState("");
    const dispatch = useDispatch();
    const changeHandler = (value) =>{
        setSelectedValue(value);
    }
    useEffect(() =>{
        dispatch(setsearchedQuery(selectedValue));
    },[selectedValue]); 

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <div className='font-bold text-lg'>Filter Jobs</div>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index - idx}`
                                    return (
                                        <div className='flex items-center space-x-2 m-2'>
                                            <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                                            <Label htmlFor={itemId}>{item}</Label>
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