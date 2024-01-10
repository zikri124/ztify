'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter()
    
    return (
        <div className="block md:hidden absolute z-50 p-3 left-4 top-4 rounded-full border-2 border-gray-200 bg-neutral-600/60 aspect-square" onClick={() => router.back()}>
            <Image alt="back-logo" height={24} width={24} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nO3ZQQqDQBBE0X/CaMQwi+TuggEN5AgGDMKsgq67y9QD99XVLmYUzORdgRl4Az1iCrAAa322IWTDr8AL4fAL0CHgthP+A9wR4PBR3HwUNx/FzUdx81HcfBQ3H6U9OM9v53wJT+XwpxigVX+FqJ9A9q6GD4T0HiIJbyILbyILbyILbyILbyILbyL7L6YG8SFGxJSfISYENcBQ279Eh7G/8wUG4eG0hTVm9AAAAABJRU5ErkJggg==" className="invert object-contain" />
        </div>
    )
}
