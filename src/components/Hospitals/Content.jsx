import React from 'react'
// import HospitalList from './HospitalList'
import HospitalSingle from './HospitalSingle'



function Content() {
  return (
    <main className='overscroll-contain absolute right-0 mt-20 flex flex-row-reverse w-4/5 p-2 pt-4'>
        {/* < HospitalList/> */}
        < HospitalSingle/>
    </main>
  )
}

export default Content