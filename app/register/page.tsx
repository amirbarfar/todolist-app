"use client";

import { RetroGrid } from '@/components/magicui/retro-grid'
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Page() {
    const router = useRouter()

    async function registerUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const userData = {
            name: formData.get('username') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        try {
            const response = await fetch(('https://todo.zmat24.ir/api/register'), {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Provider: "oNfYjDaXnAlHTl4NCv6lFxsth0zZfJ",
                },
                body: JSON.stringify(userData)
            })

            if (response.ok) {
                const res = await response.json()
                localStorage.setItem('token' , res.token);
                localStorage.setItem('name' , res.user.name);
                router.push('/home')
                toast.success('شما با موفقیت ثبت نام شدید :)')
            } else {
                toast.error('شما قبلا با این ایمیل ثبت نام کرده اید :)')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <div>
                <div>
                    <RetroGrid />
                    <div className="flex flex-col w-96 mx-auto">
                        <div className="mx-auto my-44 flex justify-center items-center flex-col font-gofteh h-96">
                            <h1 className="text-xl">بیا ثبت نام کنیم !</h1>
                            <form onSubmit={registerUser} className="grid gap-5 mt-10 border-black w-96 px-8">
                                <input name="username" className="border-2 h-12 p-3 rounded-lg bg-white" type="text" placeholder="نام و نام خانوادگی :" required />
                                <input name="email" className="border-2 h-12 p-3 rounded-lg bg-white" type="email" placeholder="ایمیل : " required />
                                <input name="password" className="border-2 h-12 p-3 rounded-lg bg-white" type="password" placeholder="رمز عبور" required />
                                <button type="submit" className="bg-black text-white rounded-md h-12">بزن بریم واسه ثبت نام :)</button>
                            </form>
                            <div className="flex justify-center items-center gap-5 mt-5">
                                <p>خب به نظر میاد قبلا ثبت نام کردی !</p>
                                <Link href="/login" className="text-slate-950">ورود</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
