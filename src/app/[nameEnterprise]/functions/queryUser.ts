import { db } from '@/src/lib/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
  
export const getUserData = async (idName: string): Promise<any> => {
    let users: any = []
    const q = query(collection(db, 'user'), where('idName', '==', idName))

    const item = await getDocs(q)

    item.forEach((doc) => {
        users.push(doc.data())
    })

    return users
}