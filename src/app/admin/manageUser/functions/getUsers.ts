import { db } from "@/src/lib/firebase";
import { User } from "@/types/user";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface Props {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export async function getUsers({ setUsers, setLoading }: Props) {
    const q = query(collection(db, "user"), orderBy("createdDate"));
    const users: User[] = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        users.push({
            id: doc.data().id,
            email: doc.data().email,
            urlImage: doc.data().urlImage,
            displayName: doc.data().displayName,
            idName: doc.data().idName,
            colorTheme: doc.data().colorTheme,
            description: doc.data().description,
            urls: doc.data().urls,
            createdDate: doc.data().createdDate
        })
    });
    setUsers(users);
    setLoading(false)
}