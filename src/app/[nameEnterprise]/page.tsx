'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Footer from './components/footer'
import { Link, Actions } from './components/link'
import ModalEditAccount from '@/src/app/[nameEnterprise]/components/modalEditAcconunt'

import { getUserData } from './functions/queryUser'
import checkIfIsLoggedIn from './functions/isSigned';
import { User } from '@/types/user';
import { uploadImage } from './functions/uploadImage';
import ModalLink from './components/modalLink';


export default function Page({ params }: { params: { nameEnterprise: string } }) {
    const isSignedIn = checkIfIsLoggedIn(params.nameEnterprise)

    const [user, setUser] = useState<User>()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function getUser() {
            const user = await getUserData(params.nameEnterprise)
            setUser(user[0])

            setLoad(true)
        }

        getUser()
    }, [params.nameEnterprise])

    if (load && user)
        return (
            <section className='flex flex-col min-h-screen'>
                <main className='flex-1'>
                    <div className='grid md:grid-cols-2 py-[100px] max-w-[1200px] mx-auto px-10 gap-20 max-lsm:py-[50px] max-lsm:gap-5 max-lsm:text-center'>
                        <div>
                            <div className='flex justify-between items-start max-lsm:flex-col max-lsm:gap-3 max-lsm:items-center'>
                                <label htmlFor='image' className={`relative bg-neutral-300 ${isSignedIn && 'cursor-pointer group'} rounded-full duration-100`}>
                                    <Image src='/linksJa/upload.svg' alt='Alterar imagem de perfil' width={50} height={50} className='absolute left-0 right-0 mx-auto my-auto top-0 bottom-0 z-10 invert hidden group-hover:block max-lsm:w-[40px] max-lsm:h-[40px]'></Image>
                                    <Image src={user.urlImage} alt='Foto de usuário' width={180} height={180} className='w-[180px] h-[180px] rounded-full group-hover:brightness-[0.40] duration-100 max-lsm:w-[140px] max-lsm:h-[140px]' />
                                </label>
                                {isSignedIn && <input type="file" name="image" id="image" className='hidden' onChange={(e) => e.target.files && uploadImage({file: e.target.files[0], user, setUser})}/>}
                                {isSignedIn && <ModalEditAccount user={user} setUser={setUser}/>}

                            </div>
                            <h2 className='font-semibold text-[28px] mt-5 max-lsm:text-[26px]'>{user.displayName}</h2>
                            {isSignedIn && user.description == '' 
                                ? <p className='text-neutral-500 mt-2'>Muito vazio por aqui... Adicione uma descrição!</p> 
                                : <p className='mt-2 text-[18px] max-lsm:text-[16px]'>{user.description}</p>
                            } 
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='font-medium text-[24px] max-lsm:text-[20px]'>Links:</h3>
                                {isSignedIn && <ModalLink user={user} setUser={setUser}/>}
                            </div>

                            {isSignedIn && user.urls && !user.urls[0] ? 
                                <div className='flex justify-center items-center mt-10 flex-col gap-5'>
                                    <Image src='/linksJa/addLink.svg' alt='Adicione seu primeiro link' width={100} height={100} className='max-lsm:w-[150px] max-lsm:h-[150px]'></Image>
                                    <p className='text-center max-w-[400px] text-neutral-500'>Adicione seus primeiros links para as pessoas o conhecerem 😊</p>
                                </div>
                                :
                                <div className='md:max-h-[400px] md:overflow-y-scroll md:pr-2'>
                                    {user.urls?.map((link) => {
                                        return (
                                            <Link.Root key={link.id} color={user.colorTheme}>
                                                <Link.Content url={link.url} type={link.type} />
                                                <Actions.Copy url={link.url} />
                                                {isSignedIn && <> <Actions.Edit /> <Actions.Delete id={link.id} user={user} setUser={setUser} /> </>}
                                            </Link.Root>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                </main>
                <Footer />
            </section>
        )
}
