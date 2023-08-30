import React from 'react'
import * as bs from 'react-icons/bs'

function MedicalRecordHistory() {
  return (
    <div className='w-full px-5'>
        <p >
            Medical Records <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> <span className="text-[#4A72FF]">Medical Record History - Mt Mary Hospital</span>
        </p>

        <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
            Medical Record History - Mt Mary Hospital
        </h1>

        <p className="flex items-center relative my-3">
            <span className="font-base">View details about your past visits at theade hospital</span>
            <aside className="absolute right-0">
                <div className="inline-flex bg-white border rounded-md mx-6">
                    <button
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
                        
                    >
                        <span className="inline">Option</span>
                        <bs.BsChevronDown className='w-3 h-3 mx-1 inline '/>
                    </button>

                    <div className="relative hidden" id='drop'>
                        <div className="absolute right-0 z-10 w-56 mt-10 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                            <div className="p-2">
                                <button
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 w-full"
                                >
                                    ReactJS Dropdown 1
                                </button>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 w-full"
                                >
                                    ReactJS Dropdown 2
                                </button>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 w-full"
                                >
                                    ReactJS Dropdown 3
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="date" name="date" placeholder='0' className='bg-white border rounded-md ms-10 focus:outline-none p-1' />

            </aside>
        </p>

        <div className="w-full my-7 ">
            <table className="w-full border-collapse border-spacing-8">
                <thead className='text-center text-base bg-[#FAFAFA]'>
                    <tr>
                    <td className='py-7'>DATE IN</td>
                    <td className='py-7'>HOSPITALIZATION STATUS</td>
                    <td className='py-7'>HOSPITAL</td>
                    <td className='py-7'>DOCTOR</td>
                    <td className='py-7'>SPECIALIZATION</td>
                    <td className='py-7'>MEDICAL REPORT</td>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='border-b'>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Jun 18, 2023
                            </p>
                            <p className="text-xs">
                                10:23 AM
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base text-red-500">
                                Hospitalized
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Mt. Mary Hospital
                            </p>
                            <p className="text-xs">
                                Near Buea Council
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Dr. Fatima Hassan
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                General Practitioner
                            </p>
                        </td>
                        <td className='py-7'>
                            <button className="p-2 bg-[#4A72FF] text-white rounded-md px-7">View</button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Jun 18, 2023
                            </p>
                            <p className="text-xs">
                                10:23 AM
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base text-green-500">
                                Not Hospitalized
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Mt. Mary Hospital
                            </p>
                            <p className="text-xs">
                                Near Buea Council
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                Dr. Fatima Hassan
                            </p>
                        </td>
                        <td className='py-7'>
                            <p className="font-semibold text-base">
                                General Practitioner
                            </p>
                        </td>
                        <td className='py-7'>
                            <button className="p-2 bg-[#4A72FF] text-white rounded-md px-7">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MedicalRecordHistory