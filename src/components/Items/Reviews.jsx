import React from 'react'
import * as bi from 'react-icons/bi'

function Reviews() {
  return (
    <div className="p-10">
            <h1 className="text-md text-[#4A72FF] font-bold mb-4">
                Doctor's Review
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
            <div className="flex justify-end">
                <div className="w-1/2">
                    <button className="py-2 px-5 text-semibold text-white shadow-sm bg-[#4A72FF] rounded-md">
                        Show all Reviews
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Reviews