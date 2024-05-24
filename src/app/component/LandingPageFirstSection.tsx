import Image from 'next/image'
import React from 'react'

const LandingPageFirstSection = () => {
  return (
    <section className='w-[100%] px-[100px] py-4'>
    <div className="hero min-h-screen bg-base-200 bg-[url('/images/bookread.jpg')] relative rounded-2xl">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">Hello there</h1>
            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-neutral text-white">Register for Free</button>
            </div>
        </div>
        <div className='absolute bottom-12 left-11'>
            <label className="input input-bordered flex justify-between p-8 items-center gap-2 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow text-black" placeholder="Search for books" />
            <button className="btn btn-neutral text-white ">Search</button>
            </label>
        </div>
    </div>
    </section>
  )
}

export default LandingPageFirstSection