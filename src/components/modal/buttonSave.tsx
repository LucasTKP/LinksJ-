import React from 'react'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    title:string
}

function ButtonSave({title, ...rest}:Props) {
    return (
        <button {...rest} type='submit' className='font-[500] ml-auto text-[20px] mb-[20px] mt-[20px] rounded-[4px] text-blue border-[2px] border-blue/80 hover:bg-blue/10 px-[15px] py-[4px] duration-100 focus:outline-blue'>
            {title}
        </button>
    )
}

export default ButtonSave