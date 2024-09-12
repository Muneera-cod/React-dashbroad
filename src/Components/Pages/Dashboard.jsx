import React from 'react'
import Home from '../ui/Dashboard/Home/Home'
import Sidebar from '../ui/Dashboard/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
       <>
       <div className='flex flex-row'>
       <Sidebar/> 
        
        <div className='header bg-slate-200 w-full min-h-screen app-container flex '> 
         
         <Outlet/>
        </div>
       </div>
         </>
  )
}

export default Dashboard