import React from 'react'

function Button({ buttonLoading }: { buttonLoading: boolean }) {
    return (
        <button disabled={buttonLoading} className='w-fit mt-[20px] text-white font-[600] text-[18px] px-[30px] py-[7px] bg-blue self-end rounded-[4px] duration-100 hover:bg-blueHover hover:drop-shadow-[0px_3px_3px_rgba(0,0,0,0.20)]'>
            {buttonLoading ?
                    "Carregando..."
            :

                    "Entrar"
            }
        </button>
    )
}

export default Button