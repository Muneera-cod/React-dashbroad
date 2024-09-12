import React, { useEffect, useState } from 'react'
import { IconDots ,IconTrashFilled,IconEdit} from '@tabler/icons-react'
import { customerdata } from './Datacustomer'
import  arrow from '../../../../assets/Arrow - Down 2.png'
import {Popover, PopoverTarget,Flex } from '@mantine/core'
function Customerlist() {
    // const url="https://jsonplaceholder.typicode.com/users"
    // const [responsedata,setResponsedata]=useState([])
    // const fetchdata=async()=>{
    //     const reponse=await fetch(url)
    //     const data=await reponse.json()
    //     setResponsedata(data)
    // }
    // useEffect(()=>{
    //    fetchdata();
    // },[])
  return (
    <div className=' w-full flex-grow flex flex-col gap-3 h-full'>
        <div className='flex px-5 py-3 rounded-lg'>
            <div className='flex-1 flex  gap-3'>
                <p>Name</p>
                <img src={arrow} className='mt-3 h-2'></img>
            </div>
            <div className='flex-1 flex  gap-3'>
                <p>Email</p>
                <img src={arrow} className='mt-3 h-2'></img>
            </div>
            <div className='flex-1 flex  gap-3'>
                <p>Phone number</p>
                <img src={arrow} className='mt-3 h-2'></img>
            </div>
            <div className='flex-1 flex  gap-3'>
               <p>Gender</p>
               <img src={arrow} className='mt-3 h-2'></img>
            </div>
        </div>
        {customerdata.map((items)=>{
            return(
                <div className='flex  px-5 py-3  rounded-lg bg-white items-center'>
                    <div className='flex-1 flex flex-row gap-3'>
                        <img src={items.img}></img>
                        <p>{items.name}</p>
                    </div>
                    <div className='flex-1 '>
                        <p>{items.email}</p>
                    </div>
                    <div className='flex-1'>
                        <p>{items.phoneNo}</p>
                    </div>
                    <div className='flex-1 flex justify-between items-center'>
                        {items.gender?<button className='w-28 h-10 rounded-full' style={{background: "rgba(255, 143, 107, 0.2)",color:' #ff8f6b'}}>Female</button>
                          :<button className='w-28 h-10 rounded-full' style={{background: "rgba(91, 147, 255, 0.2)",color:'#5B93FF'}}>Male</button>}
                           <Popover width={150} position="bottom-right" withArrow shadow="lg">
                                <PopoverTarget>
                                  <IconDots className='bg-["#030229"]'/>
                                </PopoverTarget>
                                <Popover.Dropdown>
                                  <Flex  direction={'column'} gap={3}>
                                    <Flex className='bg-blue-50 text-blue-500 text-sm font-semibold p-2 rounded-md gap-4' style={{cursor:'pointer'}}>
                                        <IconEdit size={18}/>
                                        Edit
                                    </Flex>
                                    <Flex className='bg-red-50 text-red-500  text-sm font-semibold p-2 rounded-md gap-4' style={{cursor:'pointer'}}>
                                       <IconTrashFilled size={18}/>
                                        Delete
                                    </Flex>
                                  </Flex>
                                </Popover.Dropdown>
                            </Popover>
                        
                    </div>
                </div>
        )})}
    </div>
  )
}

export default Customerlist