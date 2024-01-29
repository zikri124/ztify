import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='flex flex-col gap-8 items-center justify-center py-8'>
            <div className='flex flex-col text-center'>
                <h2 className='font-bold text-4xl mt-4 mb-4'>Page Not Found</h2>
                <p>We can’t seem to find the page you are looking for.</p>
            </div>
            <Link href="/">
                <Button variant='default' size={"lg"} className='font-bold'>Home</Button>
            </Link>
        </div>
    )
}

export default NotFound
