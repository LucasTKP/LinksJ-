import React from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title: string
    error: string | undefined
}

function Input({error, title, ...rest}: Props) {
    
    return (
        <label className={`flex flex-col cursor-text text-[14px] font-[500] bg-white relative text-[#4D4D4D] mt-[25px] outline outline-[1px]  rounded-[4px] ml-[5px] px-[15px] py-[7px] focus-within:outline-[2px]  ${error ? 'outline-redError focus-within:outline-redError  focus-within:text-redError' : 'outline-[#BBBBBB] focus-within:outline-blue  focus-within:text-blue '}
        before:w-full before:h-full before:absolute before:bottom-[-5px] before:left-[5px] before:rounded-[4px] before:outline before:outline-[1px]  before:z-[-1] before:focus-within:outline  before:focus-within:outline-[2px] ${error ? 'before:outline-redError before:focus-within:outline-redError' : 'before:outline-[#BBBBBB] before:focus-within:outline-blue'}`}>
            {title}
            <input {...rest} className='text-[16px] tw-full outline-none font-[400] text-[#4D4D4D]' />
        </label>
    )
}

export default Input