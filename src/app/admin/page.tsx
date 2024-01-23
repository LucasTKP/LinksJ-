'use client'

import React, { FormEvent } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/lib/firebase"
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter()

    function SignIn(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        if (email === 'contato.cliqueja@gmail.com' && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    router.replace('/admin/manageQrcode')
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            router.replace('/')
        }
    }

    return (
        <section className='w-full h-full flex flex-col items-center justify-center'>
            <form onSubmit={SignIn} className='flex flex-col gap-y-[20px] items-center'>
                <input autoComplete={'off'} name='email' type='email' placeholder='Digite seu email' className='text-[18px] bg-zinc-300 px-[5px] py-[3px] rounded-[4px] text-black placeholder:text-black' />
                <input name='password' required minLength={8} type='password' placeholder='Digite sua senha' className='text-[18px] bg-zinc-300 px-[5px] py-[3px] rounded-[4px] text-black placeholder:text-black' />
                <button type='submit' className='border-black border rounded-[4px] px-[5px] py-[3px] hover:bg-zinc-300 duration-100'>
                    Entrar
                </button>
            </form>
        </section>
    )
}

export default Page