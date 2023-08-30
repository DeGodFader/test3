import React from 'react'
import * as bi from 'react-icons/bi'

function DoctorCard() {
  return (
    <div className='container rounded-lg bg-[#FAFAFA] shadow-sm w-full  hover:shadow-md'>
        <img src="/images/doctor1.png" alt="" className="w-full" />
        <div className="px-6 py-4">
            <p className='text-xs'>
                Cardiologist
            </p>
            <h2 className="font-semibold text-xl text-[#4A72FF]">
                Dr. Joseph Brostito
            </h2> 
            <p className="text-xs font-bold">
                General Hospital, Buea
            </p>
            <div className="my-3 flex items-center">
                <div className="ms-5 flex items-center">
                    <p className="me-1">
                        Ratings
                    </p>
                    <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                    <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                    <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                    <bi.BiSolidStarHalf className='inline w-3 h-3 text-yellow-400'/>
                    <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5]'/>
                    <p className="inline text-xs ms-3">
                        3.5
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard