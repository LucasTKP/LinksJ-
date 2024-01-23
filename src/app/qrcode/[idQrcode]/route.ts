import { redirect } from 'next/navigation'

export async function GET(request: Request, {params}: {params: {idQrcode: string}}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/api/qrcode/${params.idQrcode}`, { cache: 'no-store' })
    
    if(res.status == 404) {
        return Response.json({
            message: 'Este qrcode está com problema, contate o suporte!'
        })
    }

    const {redirectUrl} = await res.json()
    redirect(redirectUrl)
}
