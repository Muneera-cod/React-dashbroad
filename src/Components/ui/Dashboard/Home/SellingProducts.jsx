import React from 'react'
import { sellingproductdata} from '../Home/Homedata';
import {IconStarFilled} from '@tabler/icons-react'
function SellingProducts() {
  return (
    <div className='flex-grow min-w-full h-full bg-gray-50 flex flex-col p-4 rounded-lg gap-3'>
                        {sellingproductdata.map((item) => {
                          return(
                                  <div className='flex flex-row gap-3'>
                                   <img src={item.img} className='rounded size-20'></img>
                                   <div className='flex flex-col gap-1'>
                                          <p className=''>{item.productname}</p>
                                          <div className='flex flex-row'>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          </div>
                                          <p className='text-xs font-bold'>{item.price}</p>

                                   </div>
                                                    </div> )})}
                             </div>
  )
}

export default SellingProducts