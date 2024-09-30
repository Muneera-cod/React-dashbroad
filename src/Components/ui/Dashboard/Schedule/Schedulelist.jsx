import { IconCalculatorFilled ,IconClockFilled,IconMapPinFilled,IconTrashFilled,IconEdit} from '@tabler/icons-react';
import { data1 } from './Dataschedule'
function Schedulelist() {
  return (
    <div className='flex flex-col flex-grow basis-3/4 w-full h-full gap-3'>
        <div className='flex px-5 py-3 rounded-lg '>
          <div className='basis-1/3 flex  gap-3'>
            <label className='flex'><input type='checkbox'  className='size-5 accent-indigo-500'></input></label>
                <p className='text-gray-900'>Date</p>
                <label className='flex'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                 <option>Name</option>
                                </select>
                </label>
            </div>
            <div className='basis-1/3 flex  gap-3'>
                <p className='text-gray-900'>Time</p>
                <label className='flex'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                 <option>Name</option>
                                </select>
                 </label>
            </div>
            <div className='basis-1/3 flex  gap-3'>
                <p className='text-gray-900'>Location</p>
                <label className='flex'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                 <option>Name</option>
                                </select>
                </label>
            </div>

            <div className='flex-1 flex  gap-3'>
               {/* <p></p>
               <img src={arrow} className='mt-3 h-2'></img> */}
            </div>
        </div>
        {data1.map((items)=>{
            return(
                <div key={items.location} className='flex  px-5 py-3  rounded-lg bg-white items-center'>
                    <div className='flex-1 flex flex-row gap-3'>
                    <label className='flex'><input type='checkbox'  className='size-5 accent-indigo-500'></input></label>
                        <IconCalculatorFilled  className='size-5 text-blue-400'/>
                        <p className='text-gray-900'>{items.date}</p>
                    </div>
                    <div className='flex-1 flex  gap-3'>
                        <IconClockFilled color='gray' className='size-5'/>
                        <p className='text-gray-900'>{items.time}</p>
                    </div>
                    <div className='flex-1'>
                      <div className='bg-indigo-50 px-4 py-3 w-48 flex gap-3 rounded-full items-center'>
                        <IconMapPinFilled className='text-indigo-500 size-5'/>
                        {items.location}</div>
                    </div>
                    <div className='items-center justify-end flex gap-2'>
                         <div className='w-10 h-10 bg-yellow-50 flex items-center justify-center rounded-full'>
                         <IconEdit className='text-yellow-500 size-5'/>
                         </div>
                         <div className='w-10 h-10 bg-red-50 flex items-center justify-center rounded-full'>
                          <IconTrashFilled className='text-red-500 size-5'/>
                          </div>

                    </div>
                </div>
              )})}    


    </div>
  )
}

export default Schedulelist