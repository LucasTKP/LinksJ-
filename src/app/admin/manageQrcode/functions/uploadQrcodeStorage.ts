import { storage } from "@/src/lib/firebase";
import { ref, uploadBytes } from "firebase/storage";

interface Props {
    idQrcode: string
    svgElement: HTMLElement | null
}

export async function uploadStorage({idQrcode, svgElement} : Props) {
    if (svgElement) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgElement);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });

        const storageRef = ref(storage, `qrcode/${idQrcode}.svg`);

        uploadBytes(storageRef, blob).then((snapshot) => {

        }).catch((error) => {
            console.error('Erro ao fazer upload', error);
        });
    }
}