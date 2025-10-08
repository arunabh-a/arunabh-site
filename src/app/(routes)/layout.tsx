import Footer from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className='flex-1 padding-container lg:max-container mx-auto'>
            <Header />
            <main className='flex-1 '>
                {children}
            </main>
        </main>
    )
}