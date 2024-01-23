import React, { useState } from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title: string
  colorTheme: string
}

function InputColor({colorTheme, title, ...rest }: Props) {
  const [newColor, setNewColor] = useState(colorTheme)
  return (
    <>
      <div className='flex items-center my-[15px]'>
        <p className='text-[20px] font-[500]'>Personalização</p>
        <div className='w-full h-[2px] bg-[#737373] ml-[10px]' />
      </div>

      <label style={{boxShadow: `3px 3px 0px ${newColor}`}} className={`flex items-center justify-start w-fit px-[15px] py-[5px] text-[20px] bg-[#E9E9E9] text-[#4D4D4D] rounded-[4px] focus-within:outline focus-within:outline-[2px] focus-within:outline-blue  focus-within:text-blue`}>
        {title}
        <div style={{backgroundColor:newColor}} className={`rounded-full ml-[5px] h-[25px] w-[60px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]`}>
          <input value={newColor} onChange={(color) => setNewColor(color.target.value)} {...rest} type='color' className='outline-none opacity-0' />
        </div>
      </label>
    </>
  )
}

export default InputColor