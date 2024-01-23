import { db } from "@/src/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { QrCode } from '@/src/app/admin/types/qrcode'

interface Props {
    setQrcodes: React.Dispatch<React.SetStateAction<QrCode[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export async function getQrcodes({setQrcodes, setLoading}: Props) {
    const q = query(collection(db, "qrcode"), orderBy("createdDate"));
    const qrcodes: QrCode[] = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        qrcodes.push({
            id: doc.data().id,
            url: doc.data().url,
            createdDate: doc.data().createdDate,
            type: doc.data().type,
            redirectUrl: doc.data().redirectUrl,
            nameEnterprise: doc.data().nameEnterprise
        })
    });

    setQrcodes(qrcodes)
    setLoading(false)
}