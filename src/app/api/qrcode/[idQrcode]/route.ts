import { db } from '@/src/lib/adminFirebase'

export async function GET(request: Request, {params}: {params: {idQrcode: string}}) {
    const qrRef = db.collection('qrcode').doc(params.idQrcode);
    const doc = await qrRef.get();
    
    if (!doc.exists) {
      return new Response('Id not found', {
        status: 404
      })
    } else {
        return Response.json(doc.data())
    }
}