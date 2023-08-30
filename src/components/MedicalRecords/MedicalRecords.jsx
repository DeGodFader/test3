import React from 'react'
import HospitalCard from '../Items/HospitalCard'

function MedicalRecords() {
  return (
    <div className="w-full ps-5">  
        <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
            Hospital
        </h1>
        <p className="font-semibold my-3">
            See Hospitals at your disposal or near your location
        </p>
        <hr className="w-full mt-8" />
        <div className="mt-3 grid grid-cols-3 gap-4">
            < HospitalCard/>
        </div>
    </div>
  )
}

export default MedicalRecords