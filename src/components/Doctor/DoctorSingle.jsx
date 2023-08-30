import React from 'react'
import * as bs from 'react-icons/bs'
import * as bi from 'react-icons/bi'
import Reviews from '../Items/Reviews'


function DoctorSingle() {
  return (
    <div className='w-full ps-5'>
        <p >
            Overview <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> Hospital  <bs.BsChevronRight className='w-3 h-3 mx-1 inline text-[#4A72FF]'/> <span className="text-[#4A72FF]">Hospital Information</span>
        </p>

        <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
            Doctor’s Profile 
        </h1>

        <p className=" my-5 flex relative items-center">
            <p className="font-semibold">
                See Doctors who work at this hospital and book an appointment
            </p>

            <button className="bg-[#4A72FF] p-2 rounded-lg absolute right-7">
                <img src="/images/icon.png" alt="" className='inline' />  
                <span className='inline text-sm text-white mx-1 '>Book Appointment</span>  
            </button>
        </p>

        <hr className="w-full mt-8" />

        <div className="w-full">
            <center >
                <div className="w-4/5 flex gap-14 p-7">
                    <img src="/images/doctor1.png" alt="" className="" width={500} height={380} />
                    <div className='w-auto relative'>
                        <table className="border-separate border-spacing-y-5 border-spacing-x-5 text-base w-full font-medium">
                            <tr >
                                <td>Name:</td>
                                <td>Dr. Femi Adeyemi</td>
                            </tr>
                            <tr >
                                <td>Specialist:</td>
                                <td>Cardiologist</td>
                            </tr>
                            <tr >
                                <td>Sex:</td>
                                <td>Female</td>
                            </tr>
                            <tr >
                                <td>Age:</td>
                                <td>27 Years</td>
                            </tr>
                            <tr >
                                <td>Experience: </td>
                                <td>3 Years</td>
                            </tr>
                            <tr >
                                <td>Rating: </td>
                                <td className='flex'>
                                    <div className="ms-5 flex items-center">
                                        <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                                        <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                                        <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400'/>
                                        <bi.BiSolidStarHalf className='inline w-3 h-3 text-yellow-400'/>
                                        <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5]'/>
                                        <p className="inline ms-3">
                                            3.5
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <button className="rounded-md bg-[#4A72FF] px-4 py-3 absolute start-0 ms-6 text-white flex items-center ">
                            <bs.BsChatDots className='w-6 h-6 inline'/>
                            <p className="text-sm inline ms-2 ">Message Doctor</p>
                        </button>
                    </div>
                </div>
            </center>
        </div>

        <hr className="w-full mt-8" />

        <div className="p-10 ">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                About Us
            </h1>
            <p className="text-justify text-md my-2">
                The use of this Platform (Website and Services) implies that the user has read and accepted our Terms & Conditions. If you disagree with any part hereof, do not access the Platform.”The Referrer” (“You”)means the individual accessing or using thisPlatform.One Global Medical Technology Ltd (“the Company” or “Helium Health”or “Our”) is a technology company transitioning Africa’s health care to a data-driven system, providing software products and services like credit lending to health care providers and patients.ThisTerms & Conditions (also referred to as this “Agreement”)is an Agreement between you and the Company
            </p>
        </div>

        <hr className="w-full -mt-2" />

        <div className="p-10">
            <h1 className="text-md text-[#4A72FF] font-bold">
                Doctor's Statistics
            </h1>
            <p className="text-md">
                See Doctor’s Career Performance
            </p>
            <div className="my-8 flex px-3 items-center">
                <secction className="aspect-square mx-1 flex items-center">
                    <div>
                        <p className='flex items-center'>
                            <img src="images/people.png" alt="" className="w-8 h-8 inlin" />
                            <span className="inline text-[#4A72FF] mx-2 font-bold text-lg">
                             Total Patients
                            </span>
                        </p>
                        <center>
                            <p className="text-5xl text-base">
                                50
                            </p>
                            <p className="text-[#11A75C]">
                                <bs.BsFillCaretUpFill className='w-4 h-4 inline'/>
                                <span className="inline text-lg">%10</span>
                            </p>
                        </center>
                    </div>
                </secction>

                <hr className="w-32 -mx-6 h-2 rotate-90" />

                <secction className="aspect-square mx-1 flex items-center">
                    <div>
                        <p className='flex items-center'>
                            <img src="images/drip.png" alt="" className="w-8 h-8 inlin" />
                            <span className="inline text-[#4A72FF] mx-2 font-bold text-lg">
                             Total Surgeries
                            </span>
                        </p>
                        <center>
                            <p className="text-5xl text-base">
                                50
                            </p>
                            <p className="text-[#11A75C]">
                                <bs.BsFillCaretUpFill className='w-4 h-4 inline'/>
                                <span className="inline text-lg">%10</span>
                            </p>
                        </center>
                    </div>
                </secction>

                <hr className="w-32 -mx-6 h-2 rotate-90" />

                <secction className="aspect-square mx-1 flex items-center">
                    <div>
                        <p className='flex items-center'>
                            <img src="images/calender.png" alt="" className="w-8 h-8 inlin" />
                            <span className="inline text-[#4A72FF] mx-2 font-bold text-lg">
                             Experience
                            </span>
                        </p>
                        <center>
                            <p className="text-5xl text-base">
                                50
                            </p>
                            <p className="text-[#11A75C]">
                                <bs.BsFillCaretUpFill className='w-4 h-4 inline'/>
                                <span className="inline text-lg">%10</span>
                            </p>
                        </center>
                    </div>
                </secction>

                <hr className="w-32 -mx-6 h-2 rotate-90" />

                <secction className="aspect-square mx-1 flex items-center">
                    <div>
                        <p className='flex items-center'>
                            <img src="images/calendar-2.png" alt="" className="w-8 h-8 inlin" />
                            <span className="inline text-[#4A72FF] mx-2 font-bold text-lg">
                             Appointments
                            </span>
                        </p>
                        <center>
                            <p className="text-5xl text-base">
                                50
                            </p>
                            <p className="text-[#11A75C]">
                                <bs.BsFillCaretUpFill className='w-4 h-4 inline'/>
                                <span className="inline text-lg">%10</span>
                            </p>
                        </center>
                    </div>
                </secction>
            </div>
        </div>

        <hr className="w-full -mt-2" />

        < Reviews/>
    </div>
  )
}

export default DoctorSingle