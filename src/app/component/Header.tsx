import Link from 'next/link'
import React from 'react'


const routes:{path:string,name:string}[]=[
    {path:'/',name:'Home'},
    {path:'/categories',name:'Categories'},
    {path:'/',name:'New Arrivals'},
    {path:'/home',name:'Recommended'},
    {path:'/home',name:'Carts'},
]


const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-[50px]">
        <div className='flex'>
            <h2 className='text-[20px] text-black font-bold'>Book Nest</h2>
        </div>
        <div>
            <ul className='flex text-[14px]'>
                {routes.map((route,index)=><><li className='p-4' key={index}>
                    <Link 
                    key={index}
                    className='text-black hover:text-gray-300' href={route.path}>{route.name}</Link></li></>)}
            </ul>
        </div>
        <div className='flex items-center justify-center gap-4'>
        <label className="input input-bordered flex items-center gap-2 h-8 bg-gray-300 text-black">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
    <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className="avatar">
            <div className="w-8 rounded-2xl">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
        </div>
        </div>
    </header>
  )
}

export default Header