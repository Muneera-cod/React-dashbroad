import React from 'react'
import { orderdetailsdata } from './Homedata'
function RecentOrder() {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-row p-2'>
         <p className='flex-1 text-sm text-gray-700'>Tracking no</p>
         <p className='flex-1 text-sm text-gray-700'>Product Name</p>
         <p className='flex-1 text-sm text-gray-700'>Price</p>
         <p className='flex-1 text-sm text-gray-700'>Total Order</p>
         <p className='flex-1 text-sm text-gray-700'>Total Amount</p>
      </div>
      <hr></hr>
      {orderdetailsdata.map((items)=>{
        return(
      <div className='flex flex-row p-2'>
         <p className='flex-1 text-sm text-gray-600'>{items.trackingno}</p>
         <p className='flex-1 text-sm text-gray-600'>{items.product}</p>
         <p className='flex-1 text-sm text-gray-600'>{items.price}</p>
         <div className='flex-1 items-center'>
          <div className='w-16 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-500 font-bold'>{items.totalorders}</div>
          </div>
         <p className='flex-1 text-sm text-gray-600'>{items.totalamount}</p>
      </div>
      )}) }<hr/>
</div>  
  )
}

export default RecentOrder