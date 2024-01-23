import React from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  title:string
}

function InputText({ title, ...rest }:Props) {
  return (
    <label className={`flex flex-col text-[20px] mt-[20px]`}>
      {title}
      <label className={`py-[5px] px-[10px] w-full bg-white relative text-[#4D4D4D] mt-[5px] outline outline-[1px] rounded-[4px] focus-within:outline-[2px]  outline-black focus-within:outline-blue  focus-within:text-blue 
        before:w-full before:h-full before:absolute before:bottom-[-5px] before:left-[5px] before:rounded-[4px] before:outline before:outline-[1px]  before:z-[-1] before:focus-within:outline  before:focus-within:outline-[2px] before:outline-black before:focus-within:outline-blue`}>
        <input {...rest} className=' font-[500] placeholder:text-[#737373] text-[#737373] w-full outline-none' />
      </label>
    </label>

  )
}

export default InputText


     