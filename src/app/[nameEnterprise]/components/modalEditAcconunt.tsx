'use client'
import React, { FormEvent, Ref, useRef, useState } from 'react'
import Modals from '@/src/components/modal';
import { update } from '@/src/utils/functions/firebase/update';
import { User } from '@/types/user';
import * as Dialog from '@radix-ui/react-dialog';

interface Props {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

function Index({ user, setUser }: Props) {
    const [isLoadingButton, setIsLoadingButton] = useState(false)
    const refModal = useRef<any>(null)

    function editAccount(event: FormEvent<HTMLFormElement>) {
        setIsLoadingButton(true)
        const formData = new FormData(event.currentTarget);
        const path = `user/${user.id}`

        const data = {
            displayName: formData.get('displayName')?.toString(),
            description: formData.get('description')?.toString(),
            colorTheme: formData.get('colorTheme')?.toString(),
        }

        update({ path, data }).then((result) => {
            if (result === undefined) {
                let newUser = { ...user }
                newUser.displayName = data.displayName!
                newUser.description = data.description!
                newUser.colorTheme = data.colorTheme!

                setUser(newUser)
                setIsLoadingButton(false)
                if (refModal.current) {
                    refModal.current.click()
                }
            }
        })
    }

    return (
        <Modals.modal>
            <Modals.buttonEditAccount />
            <Modals.portal onSubmitFunction={editAccount} title='Editar Conta'>
                <Modals.inputText required minLength={3} defaultValue={user.displayName} title='Nome:' name='displayName' placeholder='Sua empresa' />
                <Modals.textArea defaultValue={user.description} title='Descrição:' name='description' placeholder='Conte sobre voce' />
                <Modals.inputColor colorTheme={user.colorTheme} title='Tema:' name='colorTheme' />
                <Modals.buttonSave disabled={isLoadingButton} title={isLoadingButton ? 'Salvando...' : 'Salvar'} />
                <Dialog.Close ref={refModal} />
            </Modals.portal>
        </Modals.modal>
    )
}

export default Index