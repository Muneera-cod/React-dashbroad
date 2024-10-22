import React from 'react'
import { carddata } from './DataCard';
function Cards() {
  return (
    <div className='basis-2/12  flex sm:gap-2 md:gap-5 sm:flex-col md:flex-row'>
    {carddata.map((x)=>{return(
          <div className='flex basis-1/4 bg-white w-full h-full rounded'>
             <div className='flex-1 items-center flex justify-center'>
               <div className='w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center'>
                {x.icon}</div>
             </div>
              <div className='flex-grow flex items-center p-4'>
                 <div>
                    <h4 className='font-bold text-2xl text-gray-600'>{x.number}</h4>
                    <p className='text-sm text-gray-500'>{x.title}</p>
                 </div>
              </div>
          </div>)})}
    </div>
  )
}

export default Cards