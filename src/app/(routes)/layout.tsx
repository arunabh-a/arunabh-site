import Footer from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className='flex-1 relative padding-container overflow-clip'>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </main>
    )
}