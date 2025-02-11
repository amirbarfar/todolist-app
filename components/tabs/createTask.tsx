import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

interface CreateTaskProps {
    handelBack: (value: boolean) => void;
}

export default function CreateTask(props: CreateTaskProps) {

    const [token, setToken] = useState('')

    useEffect(() => {
        if (window !== undefined) {
            const res: string = localStorage.getItem('token') || ''
            setToken(res)
        }
    }, [])

    const [nmaeTask, setNameTask] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [flag, setFlag] = useState<string>('')
    const [time, setTime] = useState<string>('')


    interface DataType {
        title: string,
        description: string,
        category: string,
        flag: string,
        deadline: string
    }

    async function addTask(event: React.MouseEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event?.currentTarget);

        const dataUser: DataType = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            flag: formData.get('flag') as string,
            deadline: formData.get('deadline') as string
        }

        const response = await fetch('https://todo.zmat24.ir/api/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'oNfYjDaXnAlHTl4NCv6lFxsth0zZfJ',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ dataUser })
        })

        if (response.ok) {
            toast.success('با موفقیت تسک شما اضافه شد :)')

        } else {
            toast.error('متاسفانه تسک اضافه نشد :(')

        }
    }

    interface CategoryType {
        id: number;
        name: string;
    }

    const [dataCategory, setDataCategory] = useState<CategoryType[]>([])

    async function getCategory() {
        const response = await fetch('https://todo.zmat24.ir/api/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'oNfYjDaXnAlHTl4NCv6lFxsth0zZfJ',
                Authorization: `Bearer ${token}`
            },
        })

        const res = await response.json()

        if (response.ok) {
            toast.success('با موفقیت دسته بندی هارو گرفتیم :)')
            setDataCategory(res.categories)
        } else {
            toast.error('متاسفانه دسته بندی هارو پیدا نکردیم :(')
        }
    }
    useEffect(() => {
        getCategory()
    }, [])


    return (
        <div>
            <form action="" className='grid grid-cols-12 font-pelak text-lg max-sm:text-sm max-sm:px-5' onSubmit={addTask}>
                <div className='col-start-10 col-end-12 max-sm:col-start-12 max-sm:col-end-13'>
                    <svg onClick={() => props.handelBack(false)} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clipPath="url(#clip0_28_60)">    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />  </g>  <defs>    <clipPath id="clip0_28_60">      <rect width="24" height="24" fill="white" />    </clipPath>  </defs></svg>
                </div>
                <div className='flex flex-col col-start-5 col-end-9 mt-10 max-sm:mt-5 max-lg:col-start-4 max-lg:col-end-10 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>نام تسک : </label>
                    <input name="title" value={nmaeTask} onChange={(event) => setNameTask(event.target.value)} type="text" className='my-2 p-2 text-sm h-10 border-2 rounded-lg' />
                </div>
                <div className='col-start-4 col-end-7 mt-10 flex flex-col mx-2 max-sm:mt-5 max-lg:col-start-2 max-lg:col-end-7 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>درباره تسک :</label>
                    <input name="description" value={description} onChange={(event) => setDescription(event.target.value)} type="text" className='my-2 p-2 text-sm h-10 border-2 rounded-lg' />
                </div>
                <div className='mt-10 flex flex-col col-start-7 col-end-10 mr-2 max-sm:mt-5 max-lg:col-start-7 max-lg:col-end-12 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>دسته بندی ها :</label>
                    <select value={category} name="category" className='border-2 rounded-lg text-lg my-2 h-10' onChange={(event) => setCategory(event.target.value)}>
                        {dataCategory.map((item) =>
                        <option key={item.id}>{item.name}</option>
                    )}
                    </select>
                </div>
                <div className='mt-10 flex flex-col col-start-4 col-end-7 mr-2 max-sm:mt-5 max-lg:col-start-2 max-lg:col-end-7 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>میزان اهمیت :</label>
                    <select value={flag} name="flag" className='border-2 rounded-lg text-lg my-2 h-10' onChange={(event) => setFlag(event?.target.value)}>
                        <option value="low">low</option>
                        <option value="hight">hight</option>
                        <option value="medium">medium</option>
                    </select>
                </div>
                <div className='col-start-7 col-end-10 mt-10 flex flex-col mx-2 max-sm:mt-5 max-lg:col-start-7 max-lg:col-end-12 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>زمان انجام تسک :</label>
                    <input name="deadline" value={time} onChange={(event) => setTime(event?.target.value)} type="date" className='p-2 text-sm h-10 border-2 my-2 rounded-lg' />
                </div>
                <button className='bg-blue-600 h-10 text-white rounded-lg font-pelak text-base col-start-6 col-end-8 mt-20 max-lg:col-start-4 max-lg:col-end-9 max-sm:col-start-1 max-sm:col-end-13 max-sm:mt-10'>ثبت تیک :)</button>
            </form>
        </div>
    )
}
