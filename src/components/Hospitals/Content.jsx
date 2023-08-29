import React from 'react'
import * as bs from 'react-icons/bs';
import HospitalCard from './HospitalCard';


function Content() {
  return (
    <main className='overscroll-contain absolute right-0 mt-20 flex flex-row-reverse w-4/5 p-2 pt-4'>
        <div className="w-full ps-5">
        <p className=''>
                Overview  <bs.BsChevronRight className='w-3 h-3 mx-1 inline text-[#4A72FF]'/> <span className="text-[#4A72FF]">Hospital</span>
            </p>
            <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
                Hospital
            </h1>
            <p className="font-semibold my-5">
                See Hospitals at your disposal or near your location
            </p>
            <hr className="w-full mt-8" />
            <div className="mt-3 grid grid-cols-3 gap-4">
                < HospitalCard/>
                < HospitalCard/>
                < HospitalCard/>
                < HospitalCard/>
            </div>
        </div>
    </main>
  )
}

export default Content