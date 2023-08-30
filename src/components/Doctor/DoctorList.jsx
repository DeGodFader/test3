import React from 'react'
import * as bs from 'react-icons/bs';
import DoctorCard from './DoctorCard';

function DoctorList() {
  return (
    <div className="w-full ps-5">
    <p className=''>
        Overview <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> Hospital <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> Hospital Information  <bs.BsChevronRight className='w-3 h-3 mx-1 inline text-[#4A72FF]'/> <span className="text-[#4A72FF]">All Doctors</span>
    </p>
    <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
        See All Doctors
    </h1>
    <p className=" my-5 flex relative">
        <p className="font-semibold">
            See Doctors who work at this hospital and book an appointment
        </p>
    </p>
    <hr className="w-full mt-8" />
    <div className="mt-3 grid grid-cols-3 gap-4">
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
        < DoctorCard/>
    </div>
    </div>
  )
}

export default DoctorList