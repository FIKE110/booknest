import React from 'react'
import FormInput from '../component/FormInput'
import Link from 'next/link'

const page = () => {
  return (
    <main className='flex flex-col justify-center items-center h-[70%]'>
      <div>
        <h2 className='font-medium text-2xl text-black'>Sign in</h2>
      </div>
      <div>
        <form>
          <FormInput name='Email' />
          <FormInput name='Password' />
          <div className="form-control mt-6">
          <button className="btn btn-info btn-md" >Sign in</button>
          <div className='flex flex-col justify-center items-center gap-2 pt-4'>
            <Link className="link link-primary" href="/forgrt password">Forgot password?</Link>
            <Link className="link link-primary" href="/forgrt password">New Here to Book Nest? Sign up</Link>
          </div>
        </div> 
        </form>
      </div>
    </main>
  )
}

export default page