import React from 'react'
import * as bs from 'react-icons/bs'
import * as bi from 'react-icons/bi'

function HospitalSingle() {
  return (
    <div className='w-full ps-5'>
        <p >
            Overview <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> Hospital  <bs.BsChevronRight className='w-3 h-3 mx-1 inline text-[#4A72FF]'/> <span className="text-[#4A72FF]">Hospital Information</span>
        </p>

        <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
            General Hospital, Buea 
        </h1>

        <p className="font-semibold my-6 flex items-center relative mb-9">
            <span className="mx-2"> 
                <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-2'/>
                <span>4.83 </span>
            </span>
            <bi.BiSolidCircle className='inline w-2 h-2 text-[#B8B8B8]'/>
            <bi.BiPhoneCall className='inline w-6 h-6 text-[#4A72FF] ms-2'/>
            <span className="font-semibold underline mx-2">+237 657 897 999</span>
            <bi.BiSolidCircle className='inline w-2 h-2 text-[#B8B8B8] mx-2'/>
            <bi.BiSolidMap className='inline w-6 h-6 text-[#4A72FF]'/>
            <span className="font-semibold underline mx-2">46WJ+C6J, Great Soppo, Buea - Cameroon</span>

            <button className="bg-[#4A72FF] p-2 rounded-lg absolute right-7">
                <img src="/images/icon.png" alt="" className='inline' />  
                <span className='inline text-sm text-white mx-1 '>Book Appointment</span>  
            </button>
        </p>

        <div className="columns-2 gap-2">
            <img src="/images/image.png" alt="" className='w-full m-1 rounded-l-md' />
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <img src="/images/imgh1.png" alt="" />
                <img src="/images/imgh2.png" alt="" />
                <img src="/images/imgh3.png" alt="" />
                <img src="/images/imgh4.png" alt="" />
            </div>
        </div>

        <div className="p-10 ">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                About Us
            </h1>
            <p className="text-justify my-2">
                The use of this Platform (Website and Services) implies that the user has read and accepted our Terms & Conditions. If you disagree with any part hereof, do not access the Platform.”The Referrer” (“You”)means the individual accessing or using thisPlatform.One Global Medical Technology Ltd (“the Company” or “Helium Health”or “Our”) is a technology company transitioning Africa’s health care to a data-driven system, providing software products and services like credit lending to health care providers and patients.ThisTerms & Conditions (also referred to as this “Agreement”)is an Agreement between you and the Company
            </p>
            <p className="text-justify my-2">
                The Company and The Referrer are hereinafter each referred to as a “Party” and together the “Parties”.
            </p>
            <p className="text-justify my-2">    
                WHEREAS:
                <li>
                    The Company is a technology company transitioning Africa’s health care to a data-driven system, providing software products and services like credit lending to health care providers and patients.
                </li>
            </p>
        </div>
        
        <hr />

        <div className="p-10">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                About Us
            </h1>
            <div className="flex">
                <div className="w-1/3 p-4">
                    <li className="flex mb-5">
                        <bi.BiSolidMap className='inline w-7 h-9 text-[#4A72FF]'/>
                        <div>
                            <p className="font-bold mb-1 mx-1">
                                Location
                            </p>
                            <p className="text-xs my-2">
                                46WJ+C6J, Great Soppo, Buea - Cameroon
                            </p>
                        </div>
                    </li>
                    <li className="flex mb-5">
                        <bi.BiPhoneCall className='inline w-7 h-9 text-[#4A72FF]'/>
                        <div>
                            <p className="font-bold mb-1 mx-1">
                                Phone Number
                            </p>
                            <p className="text-xs my-2">
                                +237 657 897 999
                            </p>
                            <p className="text-xs my-2">
                                +237 657 897 999
                            </p>
                        </div>
                    </li>
                    <li className="flex mb-5">
                        <bi.BiSolidTimeFive className='inline w-7 h-9 text-[#4A72FF]'/>
                        <div>
                            <p className="font-bold mb-1 mx-1">
                                Working Hours
                            </p>
                            <p className="text-xs my-2">
                                Monday - Sunday (24 hours)
                            </p>
                        </div>
                    </li>
                </div>
                <div className='w-fit'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5413.550617944518!2d9.70849774581368!3d4.061445681989067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1693319265755!5m2!1sen!2scm" className='w-100 aspect-video m-0' width={540} height={250} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </div>
            </div>
        </div>

        <hr />

        <div className="p-10">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                About Us
            </h1>
            <div className="grid grid-rows-6 grid-flow-col gap-4">
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
                <li>Cardiology</li>
            </div>
        </div>

        <hr />

        <div className="p-10">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                Hospital's Review
            </h1>
            <div className="flex items-center justify-center w-full p-5 mb-2">
                <div className="p-3 rounded-xl border w-2/3 px-6">
                    <center>
                        <p className='my-1'> <span className="text-[#4A72FF]">Add Review</span> - Reviews are public and so include your acount info</p>
                        <p className="mt-5 my-3">
                            <bi.BiSolidStar className='inline w-11 h-11 text-[#E5E5E5] hover:text-yellow-400 focus:text-yellow-400 mx-2'/>
                            <bi.BiSolidStar className='inline w-11 h-11 text-[#E5E5E5] hover:text-yellow-400 focus:text-yellow-400 mx-2'/>
                            <bi.BiSolidStar className='inline w-11 h-11 text-[#E5E5E5] hover:text-yellow-400 focus:text-yellow-400 mx-2'/>
                            <bi.BiSolidStar className='inline w-11 h-11 text-[#E5E5E5] hover:text-yellow-400 focus:text-yellow-400 mx-2'/>
                            <bi.BiSolidStar className='inline w-11 h-11 text-[#E5E5E5] hover:text-yellow-400 focus:text-yellow-400 mx-2'/>
                        </p>
                        <div className="w-4/5">
                            <input type="text" className='w-full h-11 rounded-lg bg-[#E5E5E5] focus:outline-none p-5 mt-5 ' placeholder='Add Review....'/>
                            <p className="text-end text-xs font-bold my-2"><span id="counter">0</span>/500</p>
                        </div>
                        <center>
                            <button className="py-2 px-5 text-semibold text-white shadow-sm bg-[#4A72FF] rounded-md">
                                Post
                            </button>
                        </center>
                    </center>
                </div>
            </div>
            <div className="w-full grid grid-rows-3 grid-cols-2 gap-3">
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex">
                        <img src="/images/img4.png" alt="" className='rounded-full p-1 h-16 w-14'/>
                        <div className='mx-3'>
                            <h1 className='text-sm text-[#4A72FF] font-bold mb-1'>Bryan</h1>
                            <p className="text-xs">April 2023</p>
                        </div>
                    </div>
                    <div className="py-5 px-2 font-semibold text-justify w-4/5">
                        Fantastic Villa. Beautiful scenic views of the ocean. Turtles swimming in the bay. Absolutely magical!
                        <div className="py-2">
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-yellow-400 mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <bi.BiSolidStar className='inline w-3 h-3 text-[#E5E5E5] mx-1'/>
                            <span className="text-sm ms-3">3.2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HospitalSingle