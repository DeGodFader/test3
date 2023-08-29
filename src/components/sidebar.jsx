import React from 'react'
import * as bs from 'react-icons/bs';

function sidebar() {
  return (
    <aside className='fixed top-0 left-0 bg-[#63B4FF] bg-opacity-10 w-1/5 px-0 py-6 h-screen'>
        <header className="ps-7 mb-6 mt-6">
                <img src="/images/japa_logo.png" alt="" className='inline' />
                <img src="/images/Heading.png" alt="" className='inline' />
        </header>
        <div className="pt-7">
            <h1 className='ps-8 text-base font-medium'>
               Main Menu
            </h1>
            <ul className='mt-3 text-xs'>
                <li className='bg-white ps-8 p-3 text-[#4A72FF] text-sm box-border bor'>
                    <bs.BsGridFill className='w-6 h-6 inline'/>
                    <span className="mx-3">Overview</span>
                </li>
                <li className='ps-8 p-3'>
                    <bs.BsCalendar4 className='w-6 h-6  inline'/>
                    <span className="mx-3">Appointments</span>
                </li>
                <li className=' ps-8 p-3'>
                    <bs.BsClipboardPulse className='w-6 h-6 inline'/>
                    <span className="mx-3">Medical Records</span>
                </li>
                <li className=' ps-8 p-3'>
                    <bs.BsGridFill className='w-6 h-6 inline'/>
                    <span className="mx-3">Overview</span>
                </li>
                <li className=' ps-8 p-3'>
                    <bs.BsWallet className='w-6 h-6 inline'/>
                    <span className="mx-3">Financial Information</span>
                </li>
                <li className=' ps-8 p-3'>
                    <bs.BsChatRightDots className='w-6 h-6 inline'/>
                    <span className="mx-3">Messages</span>
                </li>
            </ul>
        </div>
        <div className="py-4">
            <h1 className='ps-8 text-base font-medium'>
               Setting & Help
            </h1>
            <ul className='mt-3 text-xs'>
                <li className='ps-8 p-3 text-xs'>
                    <bs.BsGear className='w-6 h-6 inline'/>
                    <span className="mx-3">Settings</span>
                </li>
                <li className='ps-8 p-3'>
                    <bs.BsInfoCircle className='w-6 h-6  inline'/>
                    <span className="mx-3">Help &  Support</span>
                </li>
                <li className=' ps-8 p-3'>
                    <bs.BsQuestionCircle className='w-6 h-6 inline'/>
                    <span className="mx-3">About Application</span>
                </li>
            </ul>
        </div>
        
    </aside>
  )
}

export default sidebar