import React ,{ useState , useEffect}from 'react'
import { IconChevronDown,IconBriefcaseFilled,IconHeartFilled,IconAlignBoxRightBottomFilled, IconShoppingBag,IconDots,IconStarFilled} from '@tabler/icons-react';

import '@mantine/charts/styles.css'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { RingProgress,Text} from '@mantine/core';
import shoe from '../../../../assets/shoe.jpg'
import { orderdetailsdata ,sellingproductdata} from '../Home/Homedata';
import { data } from './Homedata';
import { LineChart } from "@mantine/charts";
import { useNavigate } from 'react-router-dom';
function Home() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);




  return (
    <>

                <div className='w-full  flex flex-col gap-4 p-5 bg-slate-300'>
                    <div className='flex justify-between'>
                          <h1 className='font-bold  text-lg'>Dashboard</h1>
                          <div className=' flex gap-4'>
                            <button className='bg-white text-gray-600 w-28 h-10 rounded-md'><span className='flex items-center justify-center'>{currentDate}<IconChevronDown/></span></button>
                            <button className='bg-white text-gray-600 w-28 h-10 rounded-md'><span className='flex items-center justify-center'>{currentDate}<IconChevronDown/></span></button>
                          </div>
                    </div>

                    <div className='bg-slate-300 w-full h-full flex flex-col gap-5'>
                      <div className='basis-2/12  flex sm:gap-2 md:gap-5 sm:flex-col md:flex-row'>
                            <div className='flex basis-1/4 bg-white w-full h-full rounded'>
                               <div className='flex-1 items-center flex justify-center'>
                                 <div className='w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center'>
                                  <IconHeartFilled className='text-blue-600'/></div>
                               </div>
                                <div className='flex-grow flex items-center'>
                                   <div>
                                      <h4 className='font-bold text-2xl text-gray-600'>178+</h4>
                                      <p className='text-sm text-gray-500'>Save Products</p>
                                   </div>
                                </div>
                            </div>
                            <div className='flex basis-1/4 bg-white w-full h-full rounded'>
                               <div className='flex-1 items-center flex justify-center'>
                                 <div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center'>
                                  <IconAlignBoxRightBottomFilled className='text-yellow-400'/></div>
                               </div>
                               <div className='flex-grow flex items-center'>
                                   <div>
                                      <h4 className='font-bold text-2xl text-gray-600'>20+</h4>
                                      <p className='text-sm text-gray-500'>Stock Products</p>
                                   </div>
                                </div>
                            </div>
                            <div className='flex basis-1/4 bg-white w-full h-full rounded'>
                               <div className='flex-1 items-center flex justify-center'>
                                 <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
                                  <IconShoppingBag stroke={2} className='text-red-400'/></div>
                               </div>
                               <div className='flex-grow flex items-center'>
                                   <div>
                                      <h4 className='font-bold text-2xl text-gray-600'>190+</h4>
                                      <p className='text-sm text-gray-500'>Sales Products</p>
                                   </div>
                                </div>
                            </div>
                            <div className='flex basis-1/4 bg-white w-full h-full rounded'>
                               <div className='flex-1 items-center flex justify-center'>
                                 <div className='w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center'><IconBriefcaseFilled className='text-indigo-500'/></div>
                               </div>
                               <div className='flex-grow flex items-center'>
                                   <div>
                                      <h4 className='font-bold text-2xl text-gray-600'>12+</h4>
                                      <p className='text-sm text-gray-500'>Job Applications</p>
                                   </div>
                                </div>
                            </div>
                      </div>
                      <div className='basis-6/12 gap-5 flex'>
                            <div className='basis-8/12 w-full h-full bg-white rounded flex flex-col p-4'>
                                <div className='flex-1 w-full h-full bg-white'>
                                          <div className='flex justify-between items-center'>
                                              <h4 className='text-lg text-gray-500 font-bold'>Reports</h4>
                                              <IconDots className='pt-2'/>
                                            </div>
                                </div>
                                 <div className='flex-grow w-full h-full bg-gray-50'>
                                                              <LineChart
                                            h={250}
                                            w={"99%"}
                                            data={data}
                                            series={[{ name: "temperature", label: "Avg. Temperature" }]}
                                            dataKey="date"
                                            type="gradient"
                                            gradientStops={[
                                              { offset: 30, color: "violet.6" },
                                              { offset: 10, color: "pink.6" },
                                              { offset: 80, color: "indigo.5" },
                                              { offset: 10, color: "lavendar.5" },
                                              { offset: 80, color: "cyan.5" },
                                              { offset: 50, color: "blue.5" },
                                            ]}
                                            strokeWidth={5}
                                            curveType="natural"
                                            yAxisProps={{ domain: [-25, 40] }} valueFormatter={(value) => `${value}°C`}/>
                                 </div>
                            </div>
                           
                            <div className='basis-4/12 w-full h-full bg-white rounded flex flex-col p-4'> 
                                    <div className='flex-1 w-full h-full bg-white'>
                                        <div className='flex justify-between items-center'>
                                            <h4 className='text-lg text-gray-500 font-bold'>Analytics</h4>
                                            <IconDots className='pt-2'/>
                                          </div>
                                    </div>
                                    <div className='flex-grow w-full h-full bg-gray-50'>
                                            {/* <RingProgress
                                                label={
                                                  <Text size="xs" ta="center">
                                                    Application data usage
                                                  </Text>
                                                }
                                                sections={[
                                                  { value: 40, color: 'cyan' },
                                                  { value: 15, color: 'orange' },
                                                  { value: 15, color: 'grape' },
                                              ]}/> */}
                                    </div>
                            </div>                      
                      </div>
                      
                      
                      
                      <div className='basis-4/12 flex gap-5'>
                          <div className='basis-8/12 w-full h-full bg-white rounded flex flex-col p-4 '>
                                <div className='flex-1 w-full h-full bg-white'>
                                   <div className='flex justify-between items-center'>
                                     <h4 className='text-lg text-gray-500 font-bold'>Recent Orders</h4>
                                     <IconDots className='pt-2'/>
                                   </div>
                                </div>
                                <div className='flex-grow w-full h-full bg-gray-50 rounded p-2'>
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
                                        )}) }
                                  </div>
                                   
                                   
                                </div>
                          </div>
                          <div className='basis-4/12 w-full h-full bg-white rounded flex flex-col p-4'>
                             <div className='flex-1 w-full h-full bg-white'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='text-lg text-gray-500 font-bold'>Top Selling Products</h4>
                                  <IconDots className='pt-2'/>
                                </div>  
                             </div>
                             <div className='flex-grow w-full h-full bg-gray-50 flex flex-col p-4 rounded-lg gap-3'>
                               {/* <div className='flex  sm:flex-col md:flex-row gap-3'>
                                   <img src={shoe} className='rounded'></img>
                                   <div className='flex flex-col gap-1'>
                                          <p className='text-gray-700'>Nike Shoes Black Pattern</p>
                                          <div className='flex flex-row'>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          </div>
                                          <p className='text-xs font-bold'>$159</p>

                                   </div>
                                   
                                   

                               </div> */}{sellingproductdata.map((item) => {
                                  <div className='flex sm:flex-col md:flex-row gap-3'>
                                   <img src={shoe} className='rounded size-20'></img>
                                   <div className='flex flex-col gap-1'>
                                          <p className=''>Nike Shoes Black Pattern</p>
                                          <div className='flex flex-row'>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                                          </div>
                                          <p className='text-xs font-bold'>$159</p>

                                   </div>
                                   
                                   

                               </div> })}
                                
                             </div>
                          </div>
                      </div>                     
                  </div>
                 </div>
            
    
    
    </>
    
  )
}

export default Home