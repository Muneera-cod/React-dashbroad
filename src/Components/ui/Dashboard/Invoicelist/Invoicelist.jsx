import React from 'react'
import { useState , useEffect}from 'react'
import { IconSearch,IconTrashFilled,IconStarFilled,IconStar,IconDots} from '@tabler/icons-react';
import profile from '../../../../assets/user_profile.jpg'
// import {sidebardata} from '../Components/ui/Dashboard/Sidebar/Sidebardata';
import { invoicelistdata } from './Invoicelistdata';
import { useNavigate } from 'react-router-dom';

function Invoicelist() {
  const [currDate, setCurrDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setCurrDate(formattedDate);
  }, []);

  return (
    <>
    <div className='bg-slate-200 w-full min-h-screen  flex '>
           <div className='w-full  flex flex-col  p-5 bg-slate-200'>
               <div className='flex justify-between bg-slate-200 items-center h-fit'>
                          <h1 className='font-bold  text-lg'>Invoice List</h1>
                          <div className=' flex gap-4'>
                            <div className='flex  items-center px-4 bg-white rounded-lg'>
                              <input type='text' placeholder='Search'></input><IconSearch  size={14}/></div>
                            <button className='bg-indigo-500 text-white w-28 h-10 rounded-md'>
                              <div className='flex px-8 justify-between'><span>+</span>Add</div>
                            </button>
                          </div>
                    </div>
              <div className='flex flex-col w-full h-full bg-slate-200 gap-2'>
                
                <div className='flex  w-full bg-slate-200 h-14 w-full rounded Items-center px-5'>
                        <div className='flex items-center basis-1/6 gap-3'>
                            <label className='flex items-center'><input type='checkbox'  className='size-5 accent-indigo-500'></input></label>
                            <p className='m-0 p-0 text-gray-500 text-sm '>Invoice Id</p>
                            <label className='flex items-center flex-1'><select   className='size-5 text-gray-500 bg-slate-200'></select></label>
                        </div>
                        <div className='flex items-center basis-2/6 '>
                            <p className='m-0 p-0 text-gray-500 text-sm'>Name</p>
                            <label className='flex items-center'><select  className='size-5 text-gray-500 bg-slate-200'></select></label>
                        </div>
                        <div className='flex items-center basis-2/6 '>
                            <p className='m-0 p-0 text-gray-500 text-sm'>Email</p>
                            <label className='flex items-center'><select  className='size-5 text-gray-500 bg-slate-200'></select></label>
                        </div>
                        <div className='flex items-center basis-2/6 '>
                            <p className='m-0 p-0 text-gray-500 text-sm'>Date</p>
                            <label className='flex items-center'><select  className='size-5 text-gray-500 bg-slate-200'></select></label>
                        </div>
                        <div className='flex items-center basis-2/6 '>
                            <p className='m-0 p-0 text-gray-500 text-sm'>Status</p>
                            <label className='flex items-center'><select  className='size-5 text-gray-500 bg-slate-200'></select></label>
                        </div>
                        <div className='flex items-center justify-end basis-1/6 '>
                            <IconTrashFilled className='text-gray-500'></IconTrashFilled>
                        </div>
                </div>
                {invoicelistdata.map((items)=>{
                   return(
                <div className='flex  w-full bg-white h-14 focus:ring-violet-300 w-full rounded-lg Items-center px-5 '>
                        <div className='flex items-center basis-1/6'>
                          <div className='flex gap-3'> 
                            <label className='flex items-center'><input type='checkbox' className='size-5 accent-indigo-500 border-gray-200 '></input></label>
                            <p>{items.id}</p>
                          </div>  
                        </div>
                        <div className='flex items-center basis-2/6'>
                            <div className='flex gap-3'>
                                <img src={profile} className='size-8  rounded-full'></img>
                                <p>{items.name}</p>
                            </div>
                             
                        </div>
                        <div className='flex items-center basis-2/6'>
                            <div className='flex gap-3'>
                                {items.emailicon}
                                <p>{items.email}</p>
                            </div>
                        </div>
                        <div className='flex items-center basis-2/6'>
                            <div className='flex gap-3'>
                               {items.dateicon}
                                <p>{items.date}</p>
                            </div>
                        </div>
                        <div className='flex items-center basis-2/6'>
                        {items.complete?
                           <div className='flex gap-3'>
                                <button style={{background:'rgb(0,128,0,0.1)',color:'rgb(0,128,0)',borderRadius:'20px'}} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:(items.pending?<div className='flex gap-3'>
                                <button style={{background:' rgb(255,255,0,0.1)',color:'rgb(255,245,80)',borderRadius:'20px' }} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:(items.cancel?<div className='flex gap-3'>
                                <button style={{background:'rgb(255,0,0,0.1)',color:'rgb(255,0,0)',borderRadius:'20px'}} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:null))}
                        </div>
                        <div className='flex items-center basis-1/6 pl-10 pr-2 justify-between'>
                             {items.stared?<IconStarFilled className='text-yellow-300'/>:<IconStar className='border-gray-500'/>}
                             <IconDots className='text-gray-500 '/>
                        
                        </div>
                    
                      
                </div>)})}
            
              </div>

              
            </div>
        </div>

    </>
  )
}

export default Invoicelist