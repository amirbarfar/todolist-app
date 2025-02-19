import React, { FormEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface CreateTasksProps {
    handelBack: (value: boolean) => void
}

export default function Tasks(props: CreateTasksProps) {
    const [dataTasks, setDataTasks] = useState<any[]>([])
    const [token, setToken] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setToken(token)
        } else {
            return;
        }
    }, [token])

    async function getTasks() {
        if (!token) return;
        const response = await fetch('https://todo.zmat24.ir/api/task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'bWEyOKcqYJkNBHuGLkYXbCXrIX8Nc9',
                Authorization: `Bearer ${token}`
            }
        })

        if (response.ok) {
            const res = await response.json()
            setDataTasks(res.tasks)
        } else {
            console.log("error");
        }
    }

    useEffect(() => {
        getTasks()
    }, [token])

    const [editTask, setEditTask] = useState(false)
    const [idEditTask, setIdEditTask] = useState()

    const [deleteTask, setDeleteTask] = useState(false)
    const [idDeleteTasks, setIdDeleteTasks] = useState()

    const [toggleTasks , setToggleTasks ] = useState(false)
    const [idToggleTasks , setIdoggleTasks] = useState()

    const resultDataFindId = dataTasks.find((item) => {
        return item.id === idEditTask
    })

    const resultDataFindId2 = dataTasks.find((item) => {
        return item.id === idDeleteTasks
    })

    const resultDataFindId3 = dataTasks.find((item) => {
        return item.id === idToggleTasks
    })
    


    interface DataType {
        title: string,
        description: string,
        category: number,
        flag: string,
        deadline: string,
        is_do: boolean
    }

    async function putTasks(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const putTaskData: DataType = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            category: resultDataFindId.category_id,
            flag: formData.get('flag') as string,
            deadline: formData.get('deadline') as string,
            is_do: true
        }

        const response = await fetch(`https://todo.zmat24.ir/api/task/edit/${resultDataFindId.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'bWEyOKcqYJkNBHuGLkYXbCXrIX8Nc9',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(putTaskData)
        })

        const res = await response.json()

        if (response.ok) {
            toast.success('با موفقیت ادیت شد :)')
        } else {
            toast.error('متاسفانه مشکلی پیش امده لطفا بعدا امتحان کنید :(')
        }

        setEditTask(false)
        getTasks()
    }

    async function deleteTasks() {

        const response = await fetch(`https://todo.zmat24.ir/api/task/delete/${resultDataFindId2.id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Provider: 'bWEyOKcqYJkNBHuGLkYXbCXrIX8Nc9',
                Authorization: `Bearer ${token}`
            },
        })

        const res = await response.json()

        if (response.ok) {
            toast.success('با موفقیت حذف شد :)')
        } else {
            toast.error('متاسفانه مشکلی پیش امده لطفا بعدا امتحان کنید :(')
        }

        setDeleteTask(false)
        getTasks()
    }

    async function doneTasks() {

        const response = await fetch(`https://todo.zmat24.ir/api/task/${resultDataFindId3.id}/done`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Provider: 'bWEyOKcqYJkNBHuGLkYXbCXrIX8Nc9',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ "is_do": toggleTasks })
        })

        const res = await response.json()
        console.log(res);
        

        if (response.ok) {
            toast.success('تغییر با موفقیت اعمال شد :)')
        } else {
            toast.error('متاسفانه مشکلی پیش امده لطفا بعدا امتحان کنید :(')
        }
    }
    

    return (
        <div className='h-[650px] overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <label onClick={() => setEditTask(false)} className={`${editTask ? 'block' : 'hidden'} absolute w-dvw h-dvh top-0 right-0 z-20 bg-black opacity-30`}></label>
            <label onClick={() => setDeleteTask(false)} className={`${deleteTask ? 'block' : 'hidden'} absolute w-dvw h-dvh top-0 right-0 z-20 bg-black opacity-30`}></label>
            <div className='grid grid-cols-12'>
                {
                    dataTasks.map((item) => (
                        <div key={item.id} className={`bg-[#ffffffac] flex z-10 justify-between items-center p-2 col-start-4 max-sm:text-sm text-base col-end-10 border-2 h-40 px-5 mt-12 max-lg:col-start-1 max-lg:col-end-13 max-sm:mx-3 font-pelak rounded-lg`}>
                            <div className='flex flex-col'>
                                <div className='flex justify-start items-start flex-col'>
                                    <h1 className='h-10'>نام تسک : {item.title}</h1>
                                    <p className='h-10'>درباره تسک : {item.description}</p>
                                </div>
                                <div className='flex justify-start items-center gap-5 max-sm:text-xs'>
                                    <p className='h-10'>دسته بندی : {item.category.name}</p>
                                    <p className='h-10'>مقدار اهمیت : {item.flag}</p>
                                    <p className='h-10'>مهلت تسک : {item.deadline}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button onClick={() => { setIdEditTask(item.id); setEditTask(true) }} className='w-10 h-10 max-sm:w-8 max-sm:h-8 max-sm:p-1 bg-blue-500 rounded-lg text-white flex justify-center items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.8787 3.70711C15.0503 2.53553 16.9497 2.53553 18.1213 3.70711L20.2929 5.87868C21.4645 7.05025 21.4645 8.94975 20.2929 10.1213L11.4142 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H4C3.44772 21 3 20.5523 3 20V15C3 14.7348 3.10536 14.4804 3.29289 14.2929L13.8787 3.70711ZM8.58579 19L18.8787 8.70711C19.2692 8.31658 19.2692 7.68342 18.8787 7.29289L16.7071 5.12132C16.3166 4.7308 15.6834 4.7308 15.2929 5.12132L5 15.4142V19H8.58579Z" fill="white" /></svg></button>
                                <button onClick={() => { setIdDeleteTasks(item.id); setDeleteTask(true) }} className='w-10 h-10 max-sm:w-8 max-sm:h-8 max-sm:p-1 bg-red-500 rounded-lg text-white flex justify-center items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19ZM14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z" fill="white" /></svg></button>
                                <button onClick={() => {setIdoggleTasks(item.id);  ; setToggleTasks((curr) => !curr) ; doneTasks()}} className='flex justify-center items-center'><input type="checkbox" className='checkbox checkbox-accent text-white w-10 h-10 max-sm:w-8 max-sm:h-8' /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                editTask &&
                <form onSubmit={(event) => putTasks(event)} className={`${editTask ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} text-base py-6 font-pelak absolute left-[50%] top-[20%] right-[50%] p-5 translate-x-[50%] z-30 transform transition-all ease-in-out duration-500 w-96 rounded-lg h-[450px] bg-white border-2`}>
                    <div className='flex flex-col gap-1 mb-1'>
                        <label htmlFor="">اسم تسک :</label>
                        <input name='title' type="text" required className='input border-2 border-[#ddd] h-9 w-full text-base' />
                    </div>
                    <div className='flex flex-col gap-1 mb-1'>
                        <label htmlFor="">درباره تسک :</label>
                        <input name='description' type="text" required className='input border-2 border-[#ddd] h-9 w-full text-base' />
                    </div>
                    <div className='flex flex-col gap-1 mb-2'>
                        <label htmlFor="">دسته بندی :</label>
                        <select name='category' className='border-2 border-[#ddd] h-9 rounded-lg w-full text-base'>
                            {
                                dataTasks.map((item) => (
                                    <option value={item.category.name} key={item.id}>{item.category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex flex-col gap-1 mb-2'>
                        <label htmlFor="">مقدار اهمیت :</label>
                        <select name='flag' className='border-2 border-[#ddd] w-full h-9 rounded-lg text-base'>
                            <option value="low">low</option>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1 mb-'>
                        <label htmlFor="">مهلت تسک :</label>
                        <input name='deadline' type="date" required className='input border-2 border-[#ddd] h-9 w-full text-base' />
                    </div>
                    <button className='w-full h-10 bg-blue-500 rounded-lg text-white mt-5'>ویرایش کن :)</button>
                </form>
            }

            {
                deleteTask &&
                <div className='text-base py-6 font-pelak absolute left-[50%] top-[30%] right-[50%] p-5 translate-x-[50%] z-30 transform transition-all ease-in-out duration-500 w-96 rounded-lg h-52 bg-white border-2'>
                    <h2 className='flex justify-center items-center my-8'>مطمئنی میخوای {resultDataFindId2.title} رو حذف کنی ؟</h2>
                    <div className='flex justify-center items-center gap-5 text-sm'>
                        <button onClick={deleteTasks} className='w-36 h-10 bg-blue-500 rounded-lg text-white'>بله حذف کن :)</button>
                        <button onClick={() => setDeleteTask(false)} className='w-36 h-10 bg-red-500 rounded-lg text-white'>نه حذفش نکن !</button>
                    </div>
                </div>
            }
        </div>
    )
}
