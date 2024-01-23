import { db } from "@/src/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { User } from '@/types/user'

interface Props {
    id:string
    email: string
    password: string
    nameEnterprise:string
}

export async function createUserFireStore(user : Props) {
    const idName = user.nameEnterprise.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]+/ig, "_").toLowerCase()

    const dataUser : User = {
        id: user.id,
        email: user.email,
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/cliqueja-9760d.appspot.com/o/semFoto.png?alt=media&token=9f1c7b52-4daf-49b8-9f03-f5df07760e0a&_gl=1*41b17y*_ga*MjM3NjUxODM2LjE2OTU5MjU5NDU.*_ga_CW55HF8NVT*MTY5NjI3MDQ5My4xMC4xLjE2OTYyNzE5MTAuMzcuMC4w',
        displayName: user.nameEnterprise,
        idName,
        colorTheme: '#202020',
        description: "",
        urls: [],
        createdDate: new Date().getTime()
    }
    const result = await setDoc(doc(db, `user/${user.id}`), dataUser);
    return dataUser
}
