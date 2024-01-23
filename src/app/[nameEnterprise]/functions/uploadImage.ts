import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/lib/firebase";
import { User } from "@/types/user";

import { update } from "@/src/utils/functions/firebase/update";

export function uploadImage({file, user, setUser}: {file: File, user: User, setUser: React.Dispatch<React.SetStateAction<User | undefined>>}) {
    const imageProfileRef = ref(storage, `user/${user.id}/profile/${file.name}`)

    uploadBytes(imageProfileRef, file).then((snapshot) => {
        getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(async (url) => {
            await update({
                path: `user/${user.id}`,
                data: {
                    urlImage: url
                }
            })

            user.urlImage = url
            setUser({...user})
        }).catch((e) => {
            console.log(e)
        })
    }).catch((e) => {
        console.log(e)
    })
}