import { createUrl } from '@/src/utils/functions/createUrl'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function ShowPassWord() {
    const searchParams = useSearchParams()
    const router = useRouter()

    function handleShowPassWord(e: React.ChangeEvent<HTMLInputElement>) {
        const newParams = new URLSearchParams(searchParams?.toString())

        if (searchParams?.get('statePassInput')) {
            newParams.delete('statePassInput')
        } else {
            newParams.set('statePassInput', 'text')
        }

        router.push(createUrl('/', newParams))

        e.target.value = e.target.value == 'on' ? 'off' : 'on'
    }

    return (
        <div className='ml-[15px] flex items-center mt-[20px]'>
            <input type='checkbox' defaultChecked={searchParams?.get('statePassInput') ? true : false} onChange={(e) => handleShowPassWord(e)} name='checkbox' className='w-[18px] h-[18px] relative checked:bg-blue-500 outline-none
                    focus:before:w-[36px] focus:before:h-[36px] focus:before:absolute focus:before:bg-black/20 checked:focus:before:bg-blue/20 focus:before:rounded-full focus:before:top-[-9px] focus:before:right-[-9px] focus:before:z-[-1]
                 checked:after:border-none after:w-full after:h-full after:border-[2px] after:border-[#4D4D4D] after:absolute after:rounded-[2px]
                '/>

            <p className='ml-[20px]'>Mostrar Senha</p>
        </div>
    )
}

export default ShowPassWord