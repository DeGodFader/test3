import React from 'react'
import * as bi from 'react-icons/bi'

function DoctorCard() {
  return (
    <div className='container rounded-lg bg-[#FAFAFA] shadow-sm w-full  hover:shadow-md'>
        <img src="/images/image.png" alt="" className="w-full" />
        <div className="px-6 py-4">
            <p className='text-xs'>
                46WJ+C6J, Great Soppo, Buea - Cameroon
            </p>
            <h2 className="font-semibold text-xl text-[#4A72FF]">
                General Hospital, Buea
            </h2> 
            <div className="my-3 flex items-center">
                <bi.BiPhoneCall className='inline w-5 h-5 text-[#4A72FF]'/>
                <div className='text-xs font-semibold me-5'>
                    <p>+237 657 897 999</p>
                    <p>+237 657 897 999</p>
                </div>
                <hr className="w-5 rotate-90" />
                <div className="ms-5 flex items-center">
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