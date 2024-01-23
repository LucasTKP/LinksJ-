import { db } from "@/src/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { QrCode } from "@/src/app/admin/types/qrcode";


export async function updateQrcode(qrcode: QrCode) {

    const washingtonRef = doc(db, `qrcode/${qrcode.id}`);

    await updateDoc(washingtonRef, {
        redirectUrl: qrcode.redirectUrl,
        nameEnterprise: qrcode.nameEnterprise
    });
}