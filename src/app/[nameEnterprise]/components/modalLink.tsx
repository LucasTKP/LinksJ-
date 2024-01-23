'use client'
import React, { FormEvent, Ref, useRef, useState } from 'react'
import Modals from '@/src/components/modal';
import { Urls, User } from '@/types/user';
import * as Dialog from '@radix-ui/react-dialog';
import { v4 as uuidv4 } from 'uuid';
import { update } from '@/src/utils/functions/firebase/update';

interface Props {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

function Index({ user, setUser }: Props) {
    const [isLoadingButton, setIsLoadingButton] = useState(false)
    const refModal = useRef<any>(null)

    function createLink(event: FormEvent<HTMLFormElement>) {
        setIsLoadingButton(true)
        const formData = new FormData(event.currentTarget);
        const path = `user/${user.id}`

        const data:Urls = {
            id: uuidv4(),
            type: formData.get('selectSocialMedia')?.toString() as 'instagram' | 'facebook' | 'GMN' | 'telefone' | 'whatsapp' | 'website' | 'email',
            url: formData.get('link')?.toString() as string ,
        }

        let newSocialMedia = user.urls
        let newUser = {...user}
        newSocialMedia!.push(data!)
        newUser.urls = newSocialMedia

        update({ path, data:{urls:newSocialMedia} }).then((result) => {
            if (result === undefined) {
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
            <Modals.buttonCreateLink />
            <Modals.portal onSubmitFunction={createLink} title='Criar Novo'>
                <Modals.inputSelect title='Tipo de link:'/>
                <Modals.inputText required minLength={3} title='Link:' name='link' placeholder='Link da rede social' />
                <Modals.buttonSave disabled={isLoadingButton} title={isLoadingButton ? 'Salvando...' : 'Salvar'} />
                <Dialog.Close ref={refModal} />
            </Modals.portal>
        </Modals.modal>
    )
}

export default Index