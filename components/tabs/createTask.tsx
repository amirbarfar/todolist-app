import React from 'react'

interface CreateTaskProps {
    handelBack: (value: boolean) => void;
}

export default function CreateTask(props: CreateTaskProps) {
    return (
        <div className="max-sm:px-5">
            <div className='flex justify-end items-end'>
                <svg onClick={() => props.handelBack(false)} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clipPath="url(#clip0_28_60)">    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />  </g>  <defs>    <clipPath id="clip0_28_60">      <rect width="24" height="24" fill="white" />    </clipPath>  </defs></svg>
            </div>
            <div>
                <form action="" className='flex justify-start items-center flex-col flex-wrap gap-10'>
                    <div className='flex justify-start items-start flex-col gap-3'>
                        <label htmlFor="">اسم تسکتو بنویس :</label>
                        <input required type="text" className='w-96 max-sm:w-80 h-10 p-3 border-2 rounded-lg border-[#ddd]' />
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-5 gap-x-2'>
                        <div className='flex justify-start items-start flex-col gap-3'>
                            <label htmlFor="">درباره تسک یک چیزی بنویس :</label>
                            <input required type="text" className='w-96 max-sm:w-80  p-3 h-10 border-2 rounded-lg border-[#ddd]' />
                        </div>
                        <div className='flex justify-start items-start flex-col gap-3'>
                            <label htmlFor="">دسته بندی هات :</label>
                            <select required className="w-96 max-sm:w-80 h-10 border-2 rounded-lg  border-[#ddd]">
                                <option>کار</option>
                                <option>درس</option>
                                <option>تست</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5 flex-wrap'>
                        <div className='flex justify-start items-start flex-col gap-3'>
                            <label htmlFor="">اهمیت تسک :</label>
                            <select required className="w-96 max-sm:w-80 h-10 border-2 rounded-lg  border-[#ddd]">
                                <option>کم</option>
                                <option>متوسط</option>
                                <option>زیاد</option>
                            </select>
                        </div>
                        <div className='flex justify-start items-start flex-col gap-3'>
                            <label htmlFor="">مهلت تسک :</label>
                            <input type="date" className='w-96 max-sm:w-80 p-3 h-10 border-2 rounded-lg border-[#ddd]' />
                        </div>
                    </div>
                    <button className='w-96 max-sm:w-80 h-12 bg-blue-500 rounded-lg text-white flex justify-center items-center mt-10'> بریم که بسازیمش :)</button>
                </form>
            </div>
        </div>
    )
}
