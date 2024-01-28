import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Ztify - Search',
    description: 'An music app for your daily, connect with your spotify account',
}


export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}