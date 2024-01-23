'use client'

import { User } from "@/types/user"
import Image from "next/image"

import { update } from "@/src/utils/functions/firebase/update"

export default function Delete({id, user, setUser} : {id: string, user: User, setUser: React.Dispatch<React.SetStateAction<User | undefined>>}) {
    async function deleteLink() {
        const newLinks = user.urls?.filter((url) => url.id !== id)
        user.urls = newLinks

        setUser({...user})
        await update({
            path: `user/${user.id}`,
            data: {
                urls: newLinks
            }
        })
    }

    return (
        <button className="hover:bg-neutral-200 p-2 rounded-lg max-lsm:p-1" onClick={() => deleteLink()}>
            <Image src='/linksJa/delete.svg' alt="Butao de deletar link" width={26} height={26} className="max-lsm:w-[24px] max-lsm:h-[24px]"></Image>
        </button>
    )
}