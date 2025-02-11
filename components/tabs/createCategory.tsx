import { useState , useEffect } from "react"
import toast from "react-hot-toast"

interface CreateCategoryProps {
    handelBack : (value : boolean) => void
}

export default function createCategory(props : CreateCategoryProps) {

    const [token , setToken] = useState('')

    useEffect(()=>{
        if (window !== undefined) {
            const res : string = localStorage.getItem('token') || ''
            setToken(res)
        }
    } , [])
    
    
    const [nmaeCategory , setNameCategory] = useState<string>('')
    // const [iconCategory , setIconCategory] = useState<string>('')
    

    interface DataType {
        name : string,
        // icon : string
    }

    async function addCategory(event : React.MouseEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event?.currentTarget);

        const dataUser : DataType = {
            name : formData.get('name') as string,
        }

        const response = await fetch('https://todo.zmat24.ir/api/category/create' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json',
                Accept : 'application/json',
                Provider : 'oNfYjDaXnAlHTl4NCv6lFxsth0zZfJ',
                Authorization : `Bearer ${token}`
            },
            body : JSON.stringify(dataUser)
        })

        if (response.ok) {
            toast.success('با موفقیت دسته بندی شما اضافه شد :)')
            
        }else{
            toast.error('متاسفانه دسته بندی اضافه نشد :(')
        }
    }


    return (
        <div>
            <form action="" onSubmit={addCategory} className='grid grid-cols-12 font-pelak text-lg max-sm:text-sm max-sm:px-3'>
                <div className='col-start-10 col-end-12 max-sm:col-start-12 max-sm:col-end-13'>
                    <svg  width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clipPath="url(#clip0_28_60)">    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />  </g>  <defs>    <clipPath id="clip0_28_60">      <rect width="24" height="24" fill="white" />    </clipPath>  </defs></svg>
                </div>
                <div className='flex flex-col col-start-5 col-end-9 mt-10 max-lg:col-start-4 max-lg:col-end-10 max-sm:col-start-1 max-sm:col-end-13'>
                    <label>نام دسته بندی : </label>
                    <input name="name" value={nmaeCategory} type="text" onChange={(event) => setNameCategory(event?.target.value)} className='p-2 text-sm h-10 border-2 rounded-lg  my-2' />
                </div>
                {/* <div className='flex flex-col col-start-5 col-end-9 mt-10 max-lg:col-start-4 max-lg:col-end-10 max-sm:col-start-1 max-sm:col-end-13'>
                    <label> آیکون دسته بندی : </label>
                    <input name="icon" type="text" className='p-2 text-sm h-10 border-2 rounded-lg  my-2' />
                </div> */}
                <button className='bg-blue-600 h-10 text-white rounded-lg font-pelak text-base col-start-6 col-end-8 mt-20 max-lg:col-start-4 max-lg:col-end-10 max-sm:col-start-1 max-sm:col-end-13 max-sm:mt-10'>ساخت دسته بندی :)</button>
            </form>
        </div>
    )
}
