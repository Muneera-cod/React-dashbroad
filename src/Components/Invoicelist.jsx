import React from 'react'
import { useState , useEffect}from 'react'
import { IconSearch,IconMenu2,IconTrashFilled,IconLogout,IconStarFilled,IconStar,IconDots} from '@tabler/icons-react';
import "./Dashboard.css"
import profile from '../assets/user_profile.jpg'
import {sidebardata} from './Sidebar/Sidebardata';
import {invoicelistdata} from './Invoicelistdata'
import { useNavigate } from 'react-router-dom';
function Invoicelist() {
  const [currDate, setCurrDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setCurrDate(formattedDate);
  }, []);

const [sbar,setSbar]=useState(false)
const handlesidebar=()=>{
    setSbar(!sbar)
    console.log(sbar)
}
const navigate=useNavigate()
  return (
    <>
    <div className=' header bg-slate-200 w-screen min-h-screen app-container flex '>
             
             <div className='lg:w-fit bg-white flex flex-col justify-between' >
                 <div className='flex flex-col gap-14'>
                   <div className='flex p-4'><IconMenu2 onClick={handlesidebar} className='text-gray-500'/></div>
                   <div className={`flex flex-col  ${sbar?'':'flex items-center'}`}>
                     {sidebardata.map((item)=>{
                                     return(
                                       <div className='flex flex-row gap-5  px-4 py-4 hover:bg-blue-100 text-gray-500 hover:text-blue-600' onClick={()=>navigate(item.link)}><div>{item.icon}</div><div className={`block ${sbar?'':'hidden'}`}>{item.title}</div></div>
                                     )
                                   })
                                 
                           }
                   </div>
                 </div>
                 <div className={`py-5 flex justify-center  items-center gap-3${sbar?'':'py-5  flex flex-col justify-center  items-center gap-3'}`}>
                     <div className='flex gap-2 '>
                       <img src={profile} className='size-8 w-10 rounded'></img>
                       <div className={`block flex flex-col ${sbar?'':'hidden'}`}>
                         <h10 className='m-0 p-0 text-sm'>Username</h10>
                         <p className='m-0 p-0 text-xs text-gray-400'>Free account</p>
                       </div>
                      
                     </div>
                     <IconLogout className='text-gray-500 hover:text-blue-600'/>
                     
                 </div>

             </div>



           <div className='w-full  flex flex-col  p-5 bg-slate-200'>
               <div className='flex justify-between bg-slate-200 items-center h-fit'>
                          <h1 className='font-bold  text-lg'>Invoice List</h1>
                          <div className=' flex gap-4'>
                            <div className='flex  items-center px-4 bg-white rounded-lg'>
                              <input type='text' placeholder='Search'></input><IconSearch  size={14}/></div>
                            <button className='bg-indigo-500 text-white'>
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
                                <button style={{background:'rgb(0,128,0,0.1)',color:'rgb(0,128,0)',borderRadius:'20px'}}>{items.button}</button>
                            </div>:(items.pending?<div className='flex gap-3'>
                                <button style={{background:' rgb(255,255,0,0.1)',color:'rgb(255,245,80)',borderRadius:'20px'}}>{items.button}</button>
                            </div>:(items.cancel?<div className='flex gap-3'>
                                <button style={{background:'rgb(255,0,0,0.1)',color:'rgb(255,0,0)',borderRadius:'20px'}}>{items.button}</button>
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