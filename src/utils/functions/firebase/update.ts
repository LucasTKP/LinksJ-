import { db } from '@/src/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

interface Props {
    path: string
    data: {}
}

export async function update({ path, data }: Props) {
    console.log(data)
    const ref = doc(db, path);
    try {
        await updateDoc(ref, data);
    } catch (error) {
        return error
    }

}
