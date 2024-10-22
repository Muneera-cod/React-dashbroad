import React ,{ useState , useEffect}from 'react'
import { IconChevronDown,IconDots} from '@tabler/icons-react';
// import { BiSolidCheckbox } from "react-icons/bi";
import { DonutChart } from "@mantine/charts";
import '@mantine/charts/styles.css'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { RingProgress,Text} from '@mantine/core';
// import shoe from '../../../../assets/shoe.jpg'
import { data,data2 } from './Homedata';
import { LineChart } from "@mantine/charts";
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import RecentOrder from './RecentOrder';
import SellingProducts from './SellingProducts';
function Home() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
                <div className='min-w-screen  flex flex-col gap-4 p-5 bg-slate-300'>
                    <div className='flex gap-14 justify-between'>
                          <h1 className='font-bold  text-lg'>Dashboard</h1>
                          <div className=' flex gap-4'>
                            <button className='bg-white text-gray-600 w-28 h-10 rounded-md'><span className='flex items-center justify-center'>{currentDate}<IconChevronDown/></span></button>
                            <button className='bg-white text-gray-600 w-28 h-10 rounded-md'><span className='flex items-center justify-center'>{currentDate}<IconChevronDown/></span></button>
                          </div>
                    </div>
                    <div className='bg-slate-300 w-full h-full flex flex-col gap-5'>
                    <Cards/>
                      <div className='basis-6/12 gap-5 flex sm:flex-col md:flex-row'>
                            <div className='basis-8/12 w-full h-full bg-white rounded flex flex-col p-4'>
                                <div className='flex-1 w-full h-full bg-white'>
                                          <div className='flex justify-between items-center'>
                                              <h4 className='text-lg text-gray-500 font-bold'>Reports</h4>
                                              <IconDots className='pt-2'/>
                                            </div>
                                </div>
                                 <div className='flex-grow w-full h-full bg-gray-50'>
                                                              <LineChart
                                            h={"35vh"}
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
                                    <DonutChart data={ [
    { name: "USA", value: 400, color: "indigo.6" },
    { name: "India", value: 300, color: "yellow.6" },
    { name: "Japan", value: 100, color: "teal.6" },
  ]} className="w-full" chartLabel="80% Transactions"></DonutChart>
                <div className="flex lg:flex-row gap-5 sm:flex-col">
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                        {/* <BiSolidCheckbox className="text-blue-500 size-6" /> */}
                        {/* <label className="text-gray-600">Sale</label> */}
                    </div>
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                        {/* <BiSolidCheckbox className="text-yellow-200 size-6" /> */}
                        {/* <label  className="text-gray-600">Distribute</label> */}
                    </div>
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                       {/* <BiSolidCheckbox className="text-red-200 size-6" /> */}
                       {/* <label  className="text-gray-600">Return</label> */}
                    </div>   
                </div>
                                    </div>
                            </div>                      
                      </div>           
                      <div className='basis-4/12 flex gap-5 sm:flex-col md:flex-row'>
                          <div className='basis-8/12 w-full h-full bg-white rounded flex flex-col p-4 '>
                                <div className='flex-1 w-full h-full bg-white'>
                                   <div className='flex justify-between items-center'>
                                     <h4 className='text-lg text-gray-500 font-bold'>Recent Orders</h4>
                                     <IconDots className='pt-2'/>
                                   </div>
                                </div>
                                <div className='flex-grow w-full  bg-gray-50 rounded p-2'>
                               <RecentOrder/> 
                                </div>
                          </div>
                          <div className='basis-4/12 w-full h-full bg-white rounded flex flex-col p-4'>
                             <div className='flex-1 w-full h-full bg-white'>
                                <div className='flex justify-between items-center'>
                                  <h4 className='text-lg text-gray-500 font-bold'>Top Selling Products</h4>
                                  <IconDots className='pt-2'/>
                                </div>  
                             </div>
                            <SellingProducts/>
                          </div>
                      </div>                     
                  </div>
                 </div>
    </> 
  )
}

export default Home