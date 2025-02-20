import React, { FormEvent, useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

interface CreateCategoryProps {
    handelBack: (value: boolean) => void
}

export default function Categorys(props: CreateCategoryProps) {

    const [data, setData] = useState<any[]>([])
    const token = localStorage.getItem('token')

    async function getCategory() {

        const response = await fetch('https://todo.zmat24.ir/api/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'atjts55opgIT3TtgRkOg8fuoB5mSWf',
                Authorization: `Bearer ${token}`,
            }
        })

        if (response.ok) {
            const res = await response.json()
            setData(res.categories)
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getCategory()
    }, [])

    const [editCategoryToggle, setEditCategoryToggle] = useState(false)
    const [deleteCategoryToggle, setDeleltCategoryToggle] = useState(false)
    const [getTasksToggle, setGetTasksToggle] = useState(false)

    const [editIcon, setEditIcon] = useState<string>('')

    const [getIdEdit, setGetIdEdit] = useState<string>('')
    const [getIdDelete, setGetIdDelete] = useState<string>('')
    const [getIdTasks, setGetIdTasks] = useState<string>('')


    const findIdEdit = data.find((item) => {
        return item.id === getIdEdit
    })

    const findIdDelete = data.find((item) => {
        return item.id === getIdDelete
    })

    const findIdTasks = data.find((item) => {
        return item.id === getIdTasks
    })


    interface DataType {
        name: string,
        icon: string
    }

    async function editCategory(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        const dataEditCategory: DataType = {
            name: formData.get('name') as string,
            icon: formData.get('icon') as string,
        }

        const response = await fetch((`https://todo.zmat24.ir/api/category/edit/${findIdEdit.id}`), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'atjts55opgIT3TtgRkOg8fuoB5mSWf',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(dataEditCategory)
        })

        if (response.ok) {
            toast.success('دسته بندی با موفقیت اپدیت شد :)')
            setEditCategoryToggle(false)
        } else {
            console.log('خطایی داریم :(');
        }

        getCategory()
    }

    async function deleteCategory() {

        const response = await fetch((`https://todo.zmat24.ir/api/category/delete/${findIdDelete.id}`), {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Provider: 'atjts55opgIT3TtgRkOg8fuoB5mSWf',
                Authorization: `Bearer ${token}`
            },
        })

        if (response.ok) {
            toast.success('دسته بندی با موفقیت حذف شد :)')
            setDeleltCategoryToggle(false)
        } else {
            console.log('خطایی داریم :(');
        }

        getCategory()
    }

    return (
        <div className='grid grid-cols-12 px-3'>
            <div className='-mt-3 col-start-10 col-end-13 max-sm:col-start-12'>
                <svg onClick={() => props.handelBack(false)} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clipPath="url(#clip0_28_60)">    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />  </g>  <defs>    <clipPath id="clip0_28_60">      <rect width="24" height="24" fill="white" />    </clipPath>  </defs></svg>
            </div>
            <div className='col-start-3 col-end-11 max-sm:col-start-1 max-sm:col-end-13 mt-10 flex justify-center items-start gap-5 flex-wrap overflow-y-scroll h-[580px]' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <label onClick={() => setEditCategoryToggle(false)} className={`${editCategoryToggle ? 'black' : 'hidden'} z-20 transform opacity-50 bg-black absolute w-dvw h-dvh top-0 right-0`}></label>
                <label onClick={() => setDeleltCategoryToggle(false)} className={`${deleteCategoryToggle ? 'black' : 'hidden'} z-20 transform opacity-50 bg-black absolute w-dvw h-dvh top-0 right-0`}></label>
                <label onClick={() => setGetTasksToggle(false)} className={`${getTasksToggle ? 'black' : 'hidden'} z-20 transform opacity-50 bg-black absolute w-dvw h-dvh top-0 right-0`}></label>

                {
                    data.map((item) => (
                        <div key={item.id} className='w-60 h-60 z-10 border-2 max-sm:w-full max-sm:mx-1 bg-white rounded-lg flex justify-start items-start flex-col p-2'>
                            <div className='flex justify-start items-start flex-col px-4'>
                                <span className='text-4xl h-8'>{item.icon}</span>
                                <div className='mt-5 text-base'>
                                    <h2 className='w-48'> اسم دسته بندی : {item.name}</h2>
                                    <p>تعداد : {item.tasks.length}</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center flex-wrap mt-5 mx-2 text-sm gap-1'>
                                <button onClick={() => { setEditCategoryToggle(true); setGetIdEdit(item.id) }} className='w-24 h-9 bg-blue-500 rounded-lg text-white max-sm:w-36'>ویرایش کردن</button>
                                <button onClick={() => { setDeleltCategoryToggle(true); setGetIdDelete(item.id) }} className='w-24 h-9 bg-red-500 rounded-lg text-white max-sm:w-36'>حذف کردن</button>
                                <button onClick={() => { setGetTasksToggle(true); setGetIdTasks(item.id) }} className='w-24 h-9 bg-green-500 rounded-lg text-white max-sm:w-36'> نمایش تسک ها</button>
                            </div>
                        </div>
                    ))
                }
                {
                    editCategoryToggle &&
                    <div className='absolute translate-x-[50%] left-[50%] top-[20%] right-[50%] z-20 w-96 max-sm:w-80 h-96 border-2 bg-white p-5 max-sm:px-1 rounded-lg py-8'>
                        <form onSubmit={(event) => editCategory(event)} className='font-pelak text-lg max-sm:text-sm max-sm:px-3'>
                            <div className='flex flex-col'>
                                <label className='text-base'>نام دسته بندی : </label>
                                <input name="name" type="text" className='p-2 text-sm h-10 border-2 rounded-lg  my-2' />
                            </div>
                            <div className='flex flex-col mt-3'>
                                <label className='text-base'> آیکون دسته بندی : </label>
                                <input name="icon" value={editIcon} type="text" className='p-2 text-2xl h-10 border-2 rounded-lg my-2' />
                                <div className="flex justify-center gap-3 items-center flex-wrap mt-5" onClick={(event) => setEditIcon((event.target as HTMLSpanElement).innerText)}>
                                    <span className="text-2xl cursor-pointer">🏡</span>
                                    <span className="text-2xl cursor-pointer">💪</span>
                                    <span className="text-2xl cursor-pointer">📱</span>
                                    <span className="text-2xl cursor-pointer">💰</span>
                                    <span className="text-2xl cursor-pointer">✈️</span>
                                    <span className="text-2xl cursor-pointer">🎨</span>
                                    <span className="text-2xl cursor-pointer">📚</span>
                                    <span className="text-2xl cursor-pointer">🚗</span>
                                    <span className="text-2xl cursor-pointer">🍔</span>
                                </div>
                            </div>
                            <button className='bg-blue-600 h-10 text-white rounded-lg font-pelak text-base w-full mt-5'>ویرایش :)</button>
                        </form>
                    </div>
                }
                {
                    deleteCategoryToggle &&
                    <div className='absolute z-20 w-96 h-60 max-sm:w-80 p-5 text-base rounded-lg bg-white translate-x-[50%] right-[50%] left-[50%] top-[30%]'>
                        <h2 className='text-center mt-10'>میخوام دسته بندی <span className='text-red-500'>{findIdDelete.name}</span> رو با تمام تسک هاش حذف کنی ؟</h2>
                        <div className='flex justify-center items-center mt-10 gap-5'>
                            <button onClick={() => deleteCategory()} className='w-44 h-10 bg-red-500 text-white rounded-lg'>بله حذفش کن !</button>
                            <button onClick={() => setDeleltCategoryToggle(false)} className='w-44 h-10 bg-blue-500 text-white rounded-lg'>نه حذف نکنش !</button>
                        </div>
                    </div>
                }
            </div>
            {
                getTasksToggle &&
                <div className='absolute z-20 w-96 max-sm:w-[370px] h-96 p-3 text-base rounded-lg bg-white translate-x-[50%] right-[50%] left-[50%] top-[20%] overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
                    {findIdTasks.tasks != '' ? (
                        findIdTasks.tasks.map((item: any) =>
                            <div key={findIdTasks.id} className='flex flex-col border-2 p-2 rounded-lg'>
                                <div className='flex justify-start items-start flex-col'>
                                    <h1 className='h-10'>نام تسک : {item.title}</h1>
                                    <p className='h-10'>درباره تسک : {item.description}</p>
                                </div>
                                <div className='flex justify-start items-center max-sm:text-sm'>
                                    <p className='h-10 w-full'>مقدار اهمیت : {item.flag}</p>
                                    <p className='h-10 w-full'>مهلت تسک : {item.deadline}</p>
                                </div>
                            </div>
                        )
                    ) : (
                        toast.error('تو این دسته بندی تسکی نداری :)'),setGetTasksToggle(false))}
                </div>
            }
        </div>
    )
}
