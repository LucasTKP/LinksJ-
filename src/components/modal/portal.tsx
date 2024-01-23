import React, { FormEvent, ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

interface Props {
    children: ReactNode
    title: string
    onSubmitFunction: (event: FormEvent<HTMLFormElement>) => void
}

function Portal({ children, title, onSubmitFunction }: Props) {
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmitFunction(e)
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[12px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div className='relative'>
                    <Dialog.Title className="text-[24px] font-medium text-center py-[10px] text-black">
                        {title}
                    </Dialog.Title>
                    <Dialog.Close asChild className='cursor-pointer'>
                        <Image src={'/linksJa/close.svg'} alt='' width={21} height={21} className='absolute right-[15px] top-[15px] hover:bg-neutral-100 rounded-[4px] duration-100 p-[3px]' />
                    </Dialog.Close>
                </div>

                <div className='w-full h-[2px] bg-gradient-to-r from-green via-blue to-yellow' />

                <form onSubmit={handleSubmit} className='flex flex-col px-[40px] max-sm:px-[20px] text-black '>
                    {children}
                </form>

            </Dialog.Content>

        </Dialog.Portal>
    )
}

export default Portal