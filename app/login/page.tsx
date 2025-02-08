"use client";
import { RetroGrid } from '@/components/magicui/retro-grid'
import Link from 'next/link';
import React from 'react';

export default function page() {
    return (
        <div>
            <RetroGrid />
            <div className="flex flex-col w-96 mx-auto">
                <div className="mx-auto my-44 flex justify-center items-center flex-col font-gofteh h-96">
                    <h1 className="text-xl">خوش برگشتی !</h1>
                    <form className="grid gap-5 mt-10 border-black w-96 px-8">
                        <input name="email" className="border-2 h-12 p-3 rounded-lg bg-white" type="text" placeholder="ایمیل : " />
                        <input name="password" className="border-2 h-12 p-3 rounded-lg bg-white" type="password" placeholder="رمز عبور" />
                        <button className="bg-black text-white rounded-md h-12">ورود به حساب کاربری</button>
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
