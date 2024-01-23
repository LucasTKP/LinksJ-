'use client'
import * as Dialog from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react'

interface IndexProps {
    children: ReactNode;
}

function Index({ children }: IndexProps) {
    return (
        <Dialog.Root>
            {children}
        </Dialog.Root>
    )
}

export default Index