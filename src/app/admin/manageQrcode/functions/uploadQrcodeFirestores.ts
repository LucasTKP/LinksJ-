import { db } from "@/src/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { QrCode } from "@/src/app/admin/types/qrcode";



interface Props {
    qrcode: Omit<QrCode , "rediredUrl">
    setQrcodes: React.Dispatch<React.SetStateAction<QrCode[]>>

}


export async function uploadFirestore({qrcode, setQrcodes}:Props) {
    const dataQrcode : QrCode = {
        id: qrcode.id,
        url: qrcode.url,
        type: qrcode.type,
        createdDate: qrcode.createdDate,
        redirectUrl: qrcode.redirectUrl,
        nameEnterprise: qrcode.nameEnterprise
    }
    await setDoc(doc(db, `qrcode/${qrcode.id}`), dataQrcode);
    setQrcodes((qrcodes) => [...qrcodes, dataQrcode])
}