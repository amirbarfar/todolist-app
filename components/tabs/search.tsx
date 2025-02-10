export default function tab2(props: any) {
    return (
        <div className="absolute bg-white min-h-screen py-10 px-12">
            <div className="mb-5">
                <svg onClick={() => props.handelBack(false)} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clipPath="url(#clip0_28_60)">    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />  </g>  <defs>    <clipPath id="clip0_28_60">      <rect width="24" height="24" fill="white" />    </clipPath>  </defs></svg>
            </div>
            <div className="grid grid-cols-8 gap-5">
                <h2 className="text-2xl col-start-1 col-end-8">کدومو تسکتو میخوای پیدا کنی ؟ 🤔</h2>
                <input className="col-start-1 col-end-8 h-12 border-2 border-[#ddd] input" type="text" placeholder="جستجو کن ..." />
            </div>
            <div className="grid grid-cols-8 h-28 border-2 border-[#ddd] p-5 mt-10 rounded-lg">
                <div className="col-start-1 col-end-6">
                    <div className="flex justify-start items-start flex-col">
                        <h2>باشگاه</h2>
                        <p>میرم باشگاه بدنسازی و امروز روز تمرین پا هستش :)</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>ورزش</p>
                        <p>متوسط</p>
                        <p>1403/11/21</p>
                    </div>
                </div>
                <div className="col-start-6 col-end-9 flex justify-end items-end gap-2">
                    <button className="w-9 h-9 bg-blue-500 rounded-lg flex justify-center items-center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_28_54)"><path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white"/></g><defs><clipPath id="clip0_28_54"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></button>
                    <button className="w-9 h-9 bg-red-500 rounded-lg flex justify-center items-center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19Z" fill="white"/></svg></button>
                    <input type="checkbox" className="checkbox w-9 h-9" />
                </div>
            </div>
        </div>
    )
}
