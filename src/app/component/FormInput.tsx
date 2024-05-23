import React from 'react'

const FormInput = ({name}:{name:string}) => {
  return (
    <div className='flex justify-center flex-col gap-2 mt-4'>
        <label className='text-black'>{name}</label>
        <input className='form-input py-3 px-5 w-[500px] rounded-lg border-gray-400 border-[1px] outline-none' 
        placeholder={name}
        type="text"/>
    </div>
  )
}

export default FormInput