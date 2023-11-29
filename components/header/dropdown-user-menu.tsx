import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "@/utils/auth"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const DropdownUserMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/* <Button variant="outline">Menu</Button> */}
                <button className="rounded-full border border-white">
                    <Avatar className="m-1">
                        <AvatarImage src="" alt="@shadcn" />
                        <AvatarFallback>ZK</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span>
                        <ButtonLogout />
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const ButtonLogout = () => {
    'use client'

    return (
        <>
            <form action={LogOut}>
                <button type="submit">Logout</button>
            </form>
        </>
    )
}
