'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { User } from '@/types/user'
import { createUser } from './functions/createUser'
import { getUsers } from './functions/getUsers'
import Link from 'next/link'


export default function Page() {
    const [buttonLoading, setButtonLoading] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        getUsers({ setUsers, setLoading })
    }, [])

    async function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setButtonLoading(true)
        await createUser({ event, setUsers })
        setButtonLoading(false)
    }


    return (
        <section className='w-full h-full flex flex-col items-center py-[20px]'>
            {loading ?
                <svg className="h-[40px] w-[40px] animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" style={{ strokeWidth: 4 }} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                :
                <>
                    <button onClick={() => router.push('/admin/manageQrcode')} className='text-[20px] border-black border px-[5px] py-[3px] rounded-[4px] hover:bg-zinc-300 duration-100'>
                        Ir para o manage Qrcode
                    </button>

                    <form onSubmit={handleCreateUser} className='flex flex-col justify-start mt-[25px] gap-y-[10px]'>
                        <label className='flex flex-col'>
                            Nome da Empresa
                            <input autoComplete='off' required name='nameEnterprise' type='text' className='border border-black rounded-[4px] px-[4px] py-[3px] text-[18px]' placeholder='Nome da empresa' />
                        </label>

                        <label className='flex flex-col'>
                            Email
                            <input autoComplete='off' required name='email' type='email' className='border border-black rounded-[4px] px-[4px] py-[3px] text-[18px]' placeholder='Email' />
                        </label>

                        <label className='flex flex-col'>
                            Senha
                            <input autoComplete='off' required minLength={8} name='password' type='text' className='border border-black rounded-[4px] px-[4px] py-[3px] text-[18px]' placeholder='Senha' />
                        </label>

                        <div className='mt-[20px] self-center'>
                            {buttonLoading ?
                                <svg className="h-[40px] w-[40px] animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" style={{ strokeWidth: 4 }} />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>

                                :
                                <button type='submit' className='text-[20px] border-black border px-[5px] py-[3px] rounded-[4px] hover:bg-zinc-300 duration-100'>
                                    Cadastrar
                                </button>
                            }
                        </div>
                    </form>
                </>
            }

            {users.length > 0 &&
                <div className='flex flex-col mt-[30px] gap-y-[10px]'>
                    <p className='text-center font-[600] text-[18px]'>Usuários</p>
                    {users.map((user) => {
                        return (
                            <div key={user.id} className='border border-black rounded-[10px] px-[10px] py-[5px]'>
                                <p><span className='font-[600]'>Id:</span> {user.id}</p>
                                <p><span className='font-[600]'>Nome:</span> {user.displayName}</p>
                                <Link href={`https://www.links.cliqueja.online/${user.idName}`} className='underline text-blue-400'>Ir para o site</Link>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}
