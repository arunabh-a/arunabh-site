import Image from 'next/image'
import React from 'react'
import bloggingBw from '@/assets/blogging bw.svg'
const Update = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="rounded-2xl">
                <Image src={bloggingBw} alt="update" width={400} height={400} />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-200">The Portfolio Website is getting updated</h1>
        </div>
    )
}

export default Update