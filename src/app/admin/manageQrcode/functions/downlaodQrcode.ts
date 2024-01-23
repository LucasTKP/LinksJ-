import { storage } from "@/src/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { QrCode } from "@/src/app/admin/types/qrcode";
  
export async function downloadQrcode(qrcode: QrCode) {
    const starsRef = ref(storage, `qrcode/${qrcode.id}.svg`);
    getDownloadURL(starsRef)
      .then(async (url) => {
        const urlBlob = (window.URL ? URL : webkitURL).createObjectURL(await fetch(url).then(r => r.blob()))
        const element: any = document.createElement("a");
        element.href = urlBlob
        element.download = qrcode.id;

        document.body.appendChild(element);

        element.click();

        element.parentNode.removeChild(element);
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }