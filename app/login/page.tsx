"use client";
import { RetroGrid } from '@/components/magicui/retro-grid'
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState , useEffect } from 'react';
import toast from 'react-hot-toast';

interface DataType {
    email: string,
    password: string
}

export default function Page() {

    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
      }
    }, [router]);

    async function loginUser(event: React.MouseEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const dataUser: DataType = {
            email : formData.get('email') as string,
            password: formData.get('password') as string,
        }

        try {
            const response = await fetch('https://todo.zmat24.ir/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    Accept: "application/json",
                    Provider: "bGRQpZo9p8PE04BFZqFovJJ1JFEv8N",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(dataUser)
            })

            
            if (response.ok) {
                const res = await response.json()
                toast.success("شما با موفقیت وارد شدید :)")
                localStorage.setItem('token' , res.token);
                localStorage.setItem('name' , res.user.name);
                router.push('/home')
            } else {
                toast.error('لطفا اول ثبت نام کن :)')
                router.push('/register')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <RetroGrid />
            <div className="flex flex-col w-96 mx-auto">
                <div className="mx-auto my-44 flex justify-center items-center flex-col font-gofteh h-96">
                    <h1 className="text-xl">خوش برگشتی !</h1>
                    <form onSubmit={loginUser} className="grid gap-5 mt-10 border-black w-96 px-8">
                        <input name="email" className="border-2 h-12 p-3 rounded-lg bg-white" type="text" placeholder="ایمیل : " />
                        <input name="password" className="border-2 h-12 p-3 rounded-lg bg-white" type="password" placeholder="رمز عبور" />
                        <button type='submit' className="bg-black text-white rounded-md h-12">ورود به حساب کاربری</button>
                    </form>
                    <div className="flex justify-center items-center gap-5 mt-5">
                        <p>قبلا ثبت نام نکردی درسته ؟</p>
                        <Link href="/register" className="text-slate-950">ثبت نام</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
