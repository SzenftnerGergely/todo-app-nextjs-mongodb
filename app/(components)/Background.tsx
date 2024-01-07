import Image from 'next/image'
import cover from '@/public/bg-desktop-light.jpg'

export default function Background() {
    return (
        <Image
            alt="Cover"
            src={cover}
            className='w-full absolute -z-50'
            quality={100}
            priority
        />
    )
}