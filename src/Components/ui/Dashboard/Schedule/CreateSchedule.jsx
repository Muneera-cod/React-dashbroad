import React from 'react'
import { IconPlus,IconSearch } from '@tabler/icons-react'
function CreateSchedule() {
  return (
    <div className='flex-grow basis-1/4 w-full h-full bg-white rounded-md p-6 flex flex-col gap-5'>
        <button className='bg-indigo-500 p-4 flex items-center gap-2 justify-center rounded-md'>
            <IconPlus color='white' size={20}/>
            <p className='text-white'>Create Schedule</p>
        </button>
        <div className='basis-1/3 border-2 border-gray-100 rounded-md'>

        </div>
        <div className='flex-grow border-2 border-gray-100 flex flex-col p-2 gap-4'>
          <p className='text-xl font-semibold text-gray-800'>People</p>
          <div className='flex flex-col justify-between h-full'>
            <div className='bg-gray-100 flex px-5 py-3 rounded-md items-center gap-3'>
              <IconSearch className='text-gray-400 size-5'/>
              <input className='bg-gray-100 w-full' placeholder='Search for people'></input>
            </div>
            
            <button className='p-4 border-2 border-indigo-100 rounded-md text-indigo-500 font-semibold'>My Schedule</button>
          </div>


        </div>
    </div>
  )
}

export default CreateSchedule