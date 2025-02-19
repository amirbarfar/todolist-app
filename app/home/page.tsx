"use client";

import CreateTask from "@/components/tabs/createTask";
import CreateCategory from "@/components/tabs/createCategory";
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RetroGrid } from '@/components/magicui/retro-grid'
import Tasks from "@/components/tabs/Tasks";
import Categorys from "@/components/tabs/Categorys";

export default function Page() {

  const router = useRouter()

  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedName = localStorage.getItem('name');
      setToken(storedToken);
      setName(storedName)

      if (!storedToken) {
        router.push('/login');
      }
    }
  }, [router]);

  async function logout() {
    const response = await fetch(('https://todo.zmat24.ir/api/logout'), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Provider: 'bGRQpZo9p8PE04BFZqFovJJ1JFEv8N',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      router.push('/login');
      localStorage.clear();
      toast.loading('لطفا چند لحطه صبر کن بفرستمت بیرون :(', { duration: 3000 })
    } else {
      console.log('خطایی داریم :(');
    }

  }

  const [activeTab, setActiveTab] = useState<React.ReactElement>()

  const res = (e: unknown) => {
    if (!e) {
      setActiveTab(undefined)
    }
  }

  const [toggleBtn, setToggleBtn] = useState(false)

  return (
    <>
      <RetroGrid />
      <div className="p-3 max-sm:p-0">
        <div className="flex justify-between items-center max-sm:p-3">
          <h1 className="font-gofteh text-xl max-sm:text-base">خوش اومدی {name} عزیز !</h1>
          <button onClick={logout} className="w-44 h-11 bg-red-500 max-sm:w-36 max-sm:h-10 max-sm:text-base text-white rounded-lg font-gofteh">خروج از حساب</button>
        </div>
        <div className="flex justify-start items-start max-sm:mt-2">
          <svg onClick={() => setToggleBtn((cur) => !cur)} className={`${toggleBtn ? 'rotate-180 scale-100' : 'rotate-0 scale-80'} transition-all absolute transform duration-500 max-sm:mx-2 ease-in-out w-10 h-10 z-30 rounded-full bg-white border-2`} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.46 8.29C11.367 8.19627 11.2564 8.12188 11.1346 8.07111C11.0127 8.02034 10.882 7.9942 10.75 7.9942C10.618 7.9942 10.4873 8.02034 10.3654 8.07111C10.2436 8.12188 10.133 8.19627 10.04 8.29L7.04 11.29C6.94627 11.383 6.87188 11.4936 6.82111 11.6154C6.77034 11.7373 6.7442 11.868 6.7442 12C6.7442 12.132 6.77034 12.2627 6.82111 12.3846C6.87188 12.5064 6.94627 12.617 7.04 12.71L10.04 15.71C10.133 15.8037 10.2436 15.8781 10.3654 15.9289C10.4873 15.9797 10.618 16.0058 10.75 16.0058C10.882 16.0058 11.0127 15.9797 11.1346 15.9289C11.2564 15.8781 11.367 15.8037 11.46 15.71C11.5537 15.617 11.6281 15.5064 11.6789 15.3846C11.7297 15.2627 11.7558 15.132 11.7558 15C11.7558 14.868 11.7297 14.7373 11.6789 14.6154C11.6281 14.4936 11.5537 14.383 11.46 14.29L9.16 12L11.46 9.71C11.5537 9.61704 11.6281 9.50644 11.6789 9.38458C11.7297 9.26272 11.7558 9.13201 11.7558 9C11.7558 8.86799 11.7297 8.73728 11.6789 8.61542C11.6281 8.49356 11.5537 8.38296 11.46 8.29ZM14.66 12L17 9.71C17.1883 9.5217 17.2941 9.2663 17.2941 9C17.2941 8.7337 17.1883 8.4783 17 8.29C16.8117 8.1017 16.5563 7.99591 16.29 7.99591C16.0237 7.99591 15.7683 8.1017 15.58 8.29L12.58 11.29C12.4863 11.383 12.4119 11.4936 12.3611 11.6154C12.3103 11.7373 12.2842 11.868 12.2842 12C12.2842 12.132 12.3103 12.2627 12.3611 12.3846C12.4119 12.5064 12.4863 12.617 12.58 12.71L15.58 15.71C15.673 15.8037 15.7836 15.8781 15.9054 15.9289C16.0273 15.9797 16.158 16.0058 16.29 16.0058C16.422 16.0058 16.5527 15.9797 16.6746 15.9289C16.7964 15.8781 16.907 15.8037 17 15.71C17.0937 15.617 17.1681 15.5064 17.2189 15.3846C17.2697 15.2627 17.2958 15.132 17.2958 15C17.2958 14.868 17.2697 14.7373 17.2189 14.6154C17.1681 14.4936 17.0937 14.383 17 14.29L14.66 12Z" fill="black" />
          </svg>
          <ul className={`${toggleBtn ? 'pointer-events-auto opacity-100 translate-x-0 scale-95 ' : 'pointer-events-none  opacity-0 translate-x-full scale-110'} transform z-30 max-sm:items-center transition-all duration-500 ease-in-out flex justify-start items-center flex-col gap-8 text-base p-5 mt-12 w-60 max-sm:w-full h-80 py-9 px-2 rounded-lg absolute font-pelak bg-white border-2`}>
            <li onClick={() => setActiveTab(<CreateTask handelBack={(e: unknown) => res(e)} />)} className="cursor-pointer">اضافه کردن تسک ✒️</li>
            <li onClick={() => setActiveTab(<CreateCategory handelBack={(e:unknown) => res(e)}/>)} className="cursor-pointer">اضافه کردن دسته بندی ✏️</li>
            <li onClick={() => setActiveTab(<Tasks handelBack={(e:unknown) => res(e)} />)} className="cursor-pointer">تسک ها 📒</li>
            <li onClick={() => setActiveTab(<Categorys handelBack={(e : unknown) => res(e)}/>)} className="cursor-pointer">دسته بندی ها 📚</li>
            <li className="cursor-pointer">نمودار پیشرفت 📊</li>
          </ul>
          <div className="w-full font-gofteh text-xl my-5 rounded-lg max-sm:text-base">
            {activeTab ? activeTab : <h2 className="flex justify-center items-center my-60">سلام خوبی ؟ برای شروع از منو کناری یک گزینه رو انتخاب کن :)</h2>}
          </div>
        </div>
      </div>
    </>
  )
}
