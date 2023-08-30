import React from 'react';
import * as bs from 'react-icons/bs';


function Navbar() {
  return (
    <nav className='bg-[#FAFAFA] fixed top-0 right-0 w-4/5 py-1 flex flex-row-reverse items-center z-50'>
      <button className="me-9 flex items-center ms-10">
        <div className="inline mx-2">
          <p className="font-semibold my-0 py-0">
            Ariene McCoy
          </p>
          <p className='my-0 py-0'>
            ID: 43289
          </p>
        </div>
          <img src="/images/img4.png" alt="" className='rounded-full p-1 h-14 w-14'/>
        <bs.BsChevronDown className='w-5 h-5 mx-1 inline'/>
      </button>
      <buttoon className="ms-3 p-2">
        <center>
          <div className="bg-white rounded-lg p-2 w-fit">
            <bs.BsBell className='w-6 h-6 mx-1'/>
          </div>
        </center>
        <p className='mt-1 text-sm'>
          Notification
        </p>
      </buttoon>
      <buttoon className="ms-2 p-2">
        <center>
          <div className="bg-white rounded-lg p-2 w-fit flex items-center">
            <p className="inline">English</p>
            <img src="/images/gb.png" alt=""  className='w-6 h-5 mx-1'/>
            <bs.BsChevronDown className='w-4 h-4 mx-1 inline'/>
          </div>
        </center>
        <p className='mt-1 text-sm text-center'>
          Notification
        </p>
      </buttoon>
      <div class="relative mb-4 flex flex-wrap items-stretch w-2/5 ps-4">
        <input type="text" placeholder='Search' className='relative m-0 flex-auto rounded-lg px-4 py-3 leading-tight shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
        <button className='relative -left-14 flex items-center rounded-lg px-6 py-2.5 text-xs font-medium uppercase leading-tight inline'>
          <bs.BsSearch className='w-4 h-4 mx-1 inline text-opacity-50'/>
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar