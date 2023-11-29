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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "@/utils/auth"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { User } from "@/app/types/user"
import fetchUserData from "@/utils/spotify/fetch-user-data"

export const DropdownUserMenu = async () => {
    const userData: User = await fetchUserData()
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/* <Button variant="outline">Menu</Button> */}
                <button className="rounded-full border border-white">
                    <Avatar className="m-1">
                        <AvatarImage src={userData.images.length > 1 ? userData.images[1].url : ""} alt="@shadcn" />
                        <AvatarFallback>{userData.display_name.slice(0,2).toUpperCase()}</AvatarFallback>
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
                        <Link href={"/logout"}>Logout</Link>
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
