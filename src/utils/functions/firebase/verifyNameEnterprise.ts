
import { db } from "@/src/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function verifyNameEnterprise(nameEnterprise: string) {
    const q = query(collection(db, "user"), where("nameEnterprise", "==", nameEnterprise));
    var response = null 
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        response = doc.data().id
    });

    return response
}


