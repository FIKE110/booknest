import React from 'react'
import FormInput from '@/app/component/FormInput'
import Link from 'next/link'

const page = () => {
  return (
    <main className='flex flex-col justify-center items-center h-[70%] pt-16'>
    <div>
      <h2 className='font-medium text-2xl text-bold text-black'>Create an account</h2>
    </div>
    <div>
      <form>
        <FormInput name='Email' />
        <FormInput name='Password' />
        <FormInput name='Confirm Password' />
        <div className="form-control mt-6">
        <button className="btn btn-info btn-md" >Sign in</button>
        <div className='flex flex-col justify-center items-center gap-2 pt-4'>
          <p className='text-sm'>By signing up, I agree to the Privacy Policy and Terms of Service</p>
          <Link className="link link-primary" href="/forgrt password">Already have an Account? Sign in</Link>
        </div>
      </div> 
      </form>
    </div>
  </main>
  )
}

export default page