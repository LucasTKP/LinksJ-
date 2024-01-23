'use client'

import React, { FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import InputFormLogin from './input'
import Button from './button'
import login from '../functions/login'

import authValidateErrors from '../functions/firebase/authValidateErrors'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/src/lib/firebase'

function Form() {
    const searchParams = useSearchParams()
    const [error, setError] = useState<string>()
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user?.email != "contato.cliqueja@gmail.com") {
                    return router.replace(`/${user?.displayName}`)
                }
            }

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsButtonLoading(true)
        await login(event)
            .then((result) => {
                if (result?.code) {
                    setError(authValidateErrors(result.code))
                } else {
                    router.replace(`/${result}`)
                }
            })
        setIsButtonLoading(false)
    }

    return (
        <>
            <form onSubmit={handleLogin} className='flex flex-col px-[40px] max-sm:px-[20px]'>
                <InputFormLogin.Input error={error} required title='Email' autoComplete='off' type='email' name='email' placeholder='Seu email' />
                <InputFormLogin.Input error={error} required minLength={8} title='Senha' autoComplete='off' type={searchParams?.get('statePassInput') || 'password'} name='password' placeholder='Sua senha' />

                {error &&
                    <div className='mt-[8px] ml-[5px] flex items-center gap-x-[5px]'>
                        <Image src='/linksJa/exclamation.svg' alt='' width={0} height={0} className='w-[15px] h-auto text-redError fill-redError' />
                        <p className='text-[13px] text-redError'>{error}</p>
                    </div>
                }

                <InputFormLogin.ShowPassWord />
                <Button buttonLoading={isButtonLoading} />
            </form>
            
            {isButtonLoading &&
                <div className="overflow-hidden absolute top-0 w-full bg-[#f0f0f0] rounded-full">
                    <div className="animate-loading w-[100px] h-[5px] bg-blue rounded-full" />
                </div>
            }
        </>
    )
}

export default Form