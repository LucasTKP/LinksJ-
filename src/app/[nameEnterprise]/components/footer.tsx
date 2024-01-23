import React from 'react'
import Image from 'next/image'

// Imagems
import Logo from '@/public/logo.svg'

function Footer() {
    return (
        <footer className='bg-gradient-to-r from-green via-blue to-yellow pt-[3px]'>
            <div className='bg-white h-full w-full p-2 flex justify-center'>
                <a href="https://cliqueja.online" target='__blank'><Image src={Logo} alt='Logotipo do CliqueJá' width={40} height={40} className='hover:brightness-90 duration-100'></Image></a>  
            </div>
        </footer>
    )
}

export default Footer