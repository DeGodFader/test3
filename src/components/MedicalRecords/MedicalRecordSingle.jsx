import React from 'react'
import * as bs from 'react-icons/bs'


function MedicalRecordSingle() {
  return (
    <div className='w-full px-5'>
        <p >
            Medical Records <bs.BsChevronRight className='w-3 h-3 mx-1 inline '/> Medical Record History - Mt Mary Hospital <bs.BsChevronRight className='w-3 h-3 mx-1 inline text-[#4A72FF]'/> <span className="text-[#4A72FF]">Patient's Medical Records</span>
        </p>

        <h1 className="font-semibold text-2xl text-[#4A72FF] mt-3">
            Medical Record History - Mt Mary Hospital
        </h1>

        <p className="flex items-center relative my-1">
            <span className="font-base ">View details about your past visits at theade hospital</span>
            <aside className="absolute right-0">
                <button className="p-2 bg-[#4A72FF] rounded-md">
                    <bs.BsFillFileEarmarkArrowDownFill className='w-7 h-7 mx-1 inline text-white '/>
                    <span className="text-white">Download</span>
                </button>
            </aside>
        </p>

        <hr className="w-full mt-8" />

        <section className="rounded-full p-2 bg-[#F2F4F6] mt-7 w-fit">
            <button className="py-2 px-4 mx-2 rounded-full bg-white">
                Consultation
            </button>
            <button className="py-2 px-4 mx-2 rounded-full">
                Past Medical History
            </button>
        </section>

        <section className="w-full bg-[#63B4FF1A] p-5 mt-5 py-8">
            <h1 className="text-[#4A72FF] text-xl">
                Appointment Details
            </h1>
            <hr className="my-3 w-full" />
            <div className="my-7 flex">
                <div className="me-4 flex">
                    <img src="/images/doctor1.png" alt="" className='rounded-full inline -p-1 h-16 w-16'/>       
                    <p className="inline mx-1">
                        <h1 className="text-sm font-bold">Dr. Bessie Coleman</h1>
                        <span className="block text-sm">Gynecologist</span> 
                        <span className="text-[#4A72FF] text-sm">Doctor</span>   
                    </p>         
                </div>
                <div className="mx-4">
                    <h1 className="text-sm font-bold">Date</h1>
                    <span className="block text-sm">Monday, 10 July 2023</span>
                </div>
                <div className="mx-4">
                    <h1 className="text-sm font-bold">Time</h1>
                    <span className="block text-sm">09:43 AM</span>
                </div>
                <div className="mx-4">
                    <h1 className="text-sm font-bold">Hospital</h1>
                    <span className="block text-sm">Mt. Mary Hospital</span>
                </div>
                <div className="mx-4">
                    <h1 className="text-sm font-bold">Hospitalization Status</h1>
                    <span className="block text-sm text-green-600">Not Hospitalized</span>
                </div>
                <div className="mx-4">
                    <h1 className="text-sm font-bold">Appointment Status</h1>
                    <span className="block text-sm">Completed</span>
                </div>
            </div>
        </section>

        <hr className="w-full mt-8" />

        <section className="flex my-5 text-justify">
            <div className="w-2/3">
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Vital Signs
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] grid grid-cols-4 text-sm grid-rows-2">
                        <div>
                            <span className="font-semibold">B.P:</span> 120/60 mmHg
                        </div>
                        <div>
                            <span className="font-semibold">Pulse:</span> 78 b/m
                        </div>
                        <div>
                            <span className="font-semibold ">Respiratory Rate:</span> 14 cpm
                        </div>
                        <div>
                            <span className="font-semibold ms-8">Temperature:</span> 36.5 c
                        </div>
                        <div>
                            <span className="font-semibold">Urine Output:</span> 800 ml
                        </div>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Anthropometric Parameters
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] grid grid-cols-4 text-sm ">
                        <div>
                            <span className="font-semibold">Weight:</span> 120/60 mmHg
                        </div>
                        <div>
                            <span className="font-semibold">Height:</span> 78 b/m
                        </div>
                        <div>
                            <span className="font-semibold ">BMI:</span> 14 cpm
                        </div>
                        <div>
                            <span className="font-semibold ms-8">Arm Circumference:</span> 36.5 c
                        </div>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Anthropometric Parameters
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>Headache, Stomach Pain, Back Pain</p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Review of Systems
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p className='my-1'><span className="font-bold">General:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Intergumentary (Skin):</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Head, Eyes Ears, Nose and Throat:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Respiratory:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Cardiovascular:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Gastrointestinal:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Genitourinary:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Musculoskeletal:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Neurological:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Psychiatric:</span> Lost Weight, Fatigue</p>
                        <p className='my-1'><span className="font-bold">Endocrine:</span> Lost Weight, Fatigue</p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Physical Examination
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            On examination, the patient appeared uncomfortable, but in no acute distress. Vital signs were within normal limits. The musculoskeletal examination revealed diffuse tenderness on palpation of the muscles. No joint swelling, redness, or warmth was noted. Neurological examination was unremarkable.
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Consultation Summary
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            Vital signs were within normal limits. Examination of the hands revealed erythematous and dry skin without any signs of infection. No other significant findings were noted.
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Ordered Lab Test
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] grid grid-rows-5 grid-flow-col auto-cols-auto gap-1 text-sm ">
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Final Diagnosis
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            Mr. Smith's symptoms and diagnostic test results are consistent with heart failure with reduced ejection fraction. The anemia is likely secondary to chronic kidney disease.
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Treatment Plan
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p className='mb-3'>
                            Mr. Smith will be started on diuretics and an angiotensin-converting enzyme (ACE) inhibitor to manage his heart failure. He will also be referred to a cardiologist for further management and follow-up. His anemia will be further evaluated, and he will be referred to a nephrologist for management of his chronic kidney disease.
                        </p>
                        <p>
                            <span className="font-bold">Patient Status:</span> <span className="text-green-600">Not Hospitalized</span>
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Medication or Prescription
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <button className="float-right bg-[#4A72FF] p-2 my-4 px-4 text-white rounded-lg">
                            <bs.BsFillFileEarmarkArrowDownFill className='w-5 h-5 mx-1 inline text-white '/>
                            <span className="text-white">Download</span>
                        </button>
                        <ol type='1'>
                            <li className='my-4'>
                                <p className="font-bold">
                                   1. Co-Arinate tab
                                </p>
                                <p className='ps-4'>
                                    1 Daily - 3 Days
                                </p>
                            </li>
                            <li className='my-4'>
                                <p className="font-bold">
                                   1. Co-Arinate tab
                                </p>
                                <p className='ps-4'>
                                    1 Daily - 3 Days
                                </p>
                            </li>
                            <li className='my-4'>
                                <p className="font-bold">
                                   1. Co-Arinate tab
                                </p>
                                <p className='ps-4'>
                                    1 Daily - 3 Days
                                </p>
                            </li>
                            <li className='my-4'>
                                <p className="font-bold">
                                   1. Co-Arinate tab
                                </p>
                                <p className='ps-4'>
                                    1 Daily - 3 Days
                                </p>
                            </li>
                        </ol>      
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Other Remarks
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            Mr. Smith will follow up with his primary care physician and cardiologist regularly to monitor his heart function and manage his heart failure.  We will have our next appointment on Monday 15th June 2023.
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        Progressive Note
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            The Patient has shown signs of improvement since last consultation. The pain had subsided.
                        </p>
                    </section>
                </div>
                <div className="my-5">
                    <h1 className="text-[#4A72FF] text-6 mb-4">
                        E-Signature
                    </h1>
                    <section className="p-4 px-6 bg-[#FAFAFA] text-sm ">
                        <p>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MedicalRecordSingle