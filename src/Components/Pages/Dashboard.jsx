import React from 'react'
import Home from '../ui/Dashboard/Home/Home'
import Sidebar from '../ui/Dashboard/Sidebar/Sidebar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  const [sidebar,setSidebar]=useState(false)
  const handlesidebar=()=>{
    setSidebar(!sidebar)
    
}

  return (
       <>
        <div style={{position:'fixed',zIndex:10}}>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} handlesidebar={handlesidebar}/> 
        
        </div>
       <div className={`flex gap-32${sidebar?'':'flex gap-2'}`} >
        <div className={` w-14 h-screen ${sidebar?'':'w-16 h-screen'}`}></div>
       
      
        <div className={`header bg-slate-200 w-full min-h-screen app-container flex ${sidebar?"":'header bg-slate-200  w-full min-h-screen app-container flex '}`}> 
         
         <Outlet sidebar={sidebar} setSidebar={setSidebar} handlesidebar={handlesidebar}/>
        </div>
       </div>
         </>
  )
}

export default Dashboard