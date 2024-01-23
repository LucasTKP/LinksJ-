'use client'
import { auth } from "@/src/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.email == 'contato.cliqueja@gmail.com' && path == '/qrcode/admin') {
                    router.replace('/admin/manageQrcode')
                }
            } else if (path == '/admin/manageQrcode' || path == '/admin/manageUser') {
                router.replace('/qrcode/admin')
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {children}
        </>
    )
}
