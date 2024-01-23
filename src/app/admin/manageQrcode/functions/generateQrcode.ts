import { v4 as uuidv4 } from 'uuid';
import { QrCode } from "@/src/app/admin/types/qrcode";


export function generateUrlQrcode(type: 'links' | 'gmn') {
    const id = uuidv4()

    const data : QrCode = {
        id: id,
        url: `${'https://www.links.cliqueja.online/qrcode/' + id}`,
        createdDate: new Date().getTime(),
        type: type,
        redirectUrl: '',
        nameEnterprise: ''
    }
    return data
}