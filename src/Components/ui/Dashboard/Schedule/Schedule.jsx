import React from 'react'
import NavbarSchedule from './NavbarSchedule'
import CreateSchedule from './CreateSchedule'
import Schedulelist from './Schedulelist'

function Schedule() {
  return (
    <div className='p-6 flex flex-col min-w-screen h-full gap-5'>
      <NavbarSchedule/>
      <div className='flex sm:flex-col md:flex-row gap-6 flex-grow w-full h-full'>
          <CreateSchedule/>
          <Schedulelist/>
      </div>

    </div>
  )
}

export default Schedule