import React from 'react'
import { IconMenu } from '@tabler/icons-react';
import { sidebardata } from './Sidebardata'
function Sidebar() {
  
  return (
    <div className='w-52 h-screen bg-red-900 pl-6 pt-4 gap-10 flex flex-col fixed top-0'>
      
      <div className='flex flex-col gap-8'>
        {sidebardata.map((item)=>{
          return(
            <div className='flex flex-row gap-5'>{item.icon}{item.title}</div>
          )
        })
       
}
      </div>
    </div>
  )
}

export default Sidebar