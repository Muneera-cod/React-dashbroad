import React from 'react'

function NavbarSchedule() {
  return (
    <div className='flex justify-between  h-fit'>
    <h1 className='font-bold  text-lg'>Schedule List</h1>
   
        
        <button className='bg-indigo-500 text-white  h-10 rounded-md w-fit px-5' onClick={()=>handleNavigation('addcustomer')}>
            <div className='flex gap-3'><span>+</span><p>Add New</p></div>
        </button>

</div>
  )
}

export default NavbarSchedule