import '@/style/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'CliqueJá',
  description: 'Inovação para empresas que querem se diferenciar.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} w-full max-w-[100vw] h-[100vh] font-poppins`}>
        {
          children
        }
      </body>
    </html>
  )
}