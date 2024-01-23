import * as Dialog from '@radix-ui/react-dialog';
import React from 'react'
import Image from 'next/image';

function ButtonCreateLink() {
    return (
        <Dialog.Trigger asChild >
            <button className='flex text-[20px] items-center bg-[#EEEEEE] px-[15px] py-[5px] rounded-[8px] gap-x-[5px] hover:bg-[#dbdbdb] duration-100'>
                Criar novo

                <Image src='/linksJa/copyLink.svg' alt='' width={0} height={0} className='w-[20px] h-auto' />
                
            </button>
        </Dialog.Trigger>
    )
}

export default ButtonCreateLink