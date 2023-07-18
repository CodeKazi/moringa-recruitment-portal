import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moringa Recruitment Portal',
  description: 'Moringa alumni job posting and application portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className='h-full w-full bg-white'>
      <body className={`w-full h-full content-center ${inter.className}`}>{children}</body>
    </html>
  )
}
