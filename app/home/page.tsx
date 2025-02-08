"use client";

// import { useState } from "react"

export default function page() {

  // const [userInformation, setUserInformation] = useState(false)

  return (
    <div>
      
    </div>
    // <div className="font-gofteh p-2  bg-[#f4f4f46a] w-96 min-h-screen">
    //   <div>
    //     <div className="flex justify-start hover:cursor-pointer relative items-center gap-1">
    //       <img className="w-14 h-14 bg-slate-300 rounded-full" src="#" alt="" />
    //       <p className="text-lg">امیرحسین برفر</p>
    //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z" fill="black" />
    //       </svg>
    //     </div>
    //     {
    //       userInformation &&
    //       <div className={`${userInformation ? "scale-100 opacity-100" : "scale-90 opacity-0 "} transition-all duration-300 ease-in-out transform w-72 h-96 bg-white border-2 p-4 shadow-xl rounded-lg right-5 absolute top-24`}>
    //         <div className="flex justify-between items-center  mb-2">
    //           <h1 className="text-lg text-center">پنل اطلاعاتی کاربر</h1>
    //           <svg onClick={() => setUserInformation(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g clip-path="url(#clip0_28_60)">
    //               <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />
    //             </g>
    //             <defs>
    //               <clipPath id="clip0_28_60">
    //                 <rect width="24" height="24" fill="white" />
    //               </clipPath>
    //             </defs>
    //           </svg>

    //         </div>
    //         <form action="" className="flex justify-start items-center flex-col gap-2">
    //           <input className="w-full p-2 rounded-lg h-12 border-4" type="text" required placeholder="اسمتو میخوای به چی تغییر بدی؟" />
    //           <input className="w-full p-2 rounded-lg h-12 border-4" type="email" required placeholder="ایمیلتم بیا تغییر بده" />
    //           <input className="w-full p-2 rounded-lg h-12 border-4" type="password" required placeholder="موند فقط رمزت اونم عوض کن :)" />
    //           <input className="file-input file-input-bordered w-full max-w-xs" type="file" required />
    //           <button className="w-full h-10 bg-blue-500 rounded-lg text-white">ثبت تغییرات</button>
    //           <button className="w-full h-10 bg-red-500 rounded-lg text-white">خروج از حساب کاربری</button>
    //         </form>
    //       </div>
    //     }
    //   </div>

    //   <div className="mt-10 p-2">
    //     <div className="flex justify-start items-center gap-1">
    //       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_28_109)">  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="#FF2C2C" /></g><defs>  <clipPath id="clip0_28_109"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>
    //       <h2 className="">تسک جدید</h2>
    //     </div>
    //     <div className="flex justify-start items-center gap-1">
    //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_862)"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#FF2C2C"/></g><defs><clipPath id="clip0_2_862"><rect width="35" height="35" fill="white"/></clipPath></defs></svg>
    //       <h2 className="">جستجو</h2>
    //     </div>
    //   </div>
    // </div>
  )
}
