import React from 'react'
import { IconMenu2,IconLogout } from '@tabler/icons-react';
import { sidebardata } from './Sidebardata'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../../../assets/user_profile.jpg'
function Sidebar(props) {
  

const navigate=useNavigate()
  return (
    <div className='w-fit min-h-screen bg-white flex flex-col justify-between' >
    <div className='flex flex-col gap-14'>
      <div className='flex p-4'><IconMenu2 onClick={props.handlesidebar} text-gray-500/></div>
      <div className={`flex flex-col  ${props.sidebar?'':'flex items-center'}`}>
        {sidebardata.map((item)=>{
                        return(
                          <div className='flex flex-row gap-5  px-5 py-5 hover:bg-blue-100 text-gray-500 hover:text-blue-600' onClick={()=>navigate(item.link)}><div>{item.icon}</div><div className={`block ${props.sidebar?'':'hidden'}`}>{item.title}</div></div>
                        )
                      })
                    
              }
      </div>
    </div>
    <div className={`py-5 flex justify-center  items-center gap-3${props.sidebar?'':'py-5  flex flex-col justify-center  items-center gap-3'}`}>
        <div className='flex gap-2'>
          <img src={profile} className='size-8 w-10 rounded'></img>
          <div className={`block flex flex-col ${props.sidebar?'':'hidden'}`}>
            <h10 className='m-0 p-0 text-sm'>Username</h10>
            <p className='m-0 p-0 text-xs text-gray-400'>Free account</p>
          </div>
        </div>
        <IconLogout className='text-gray-500 hover:text-blue-600'/>
        
    </div>

</div>
  )
}

export default Sidebar