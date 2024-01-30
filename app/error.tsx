'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
    error, 
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.log(error.message)
    }, [error])

    return (
        <div className="flex flex-col items-center gap-4 h-full">
            <h2 className="text-lg font-semibold">Something went wrong :&#40;</h2>
            <p className="text-neutral-600">{error.message}</p>
            <Button onClick={() => reset()}>Try Again</Button>
        </div>
    )
}
