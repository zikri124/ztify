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
import { User } from "@/types/user"
import fetchUserData from "@/utils/spotify/fetch-user-data"
import UserAvatar from "../ui/user-avatar"

export const DropdownUserMenu = async () => {
    const userData: User = await fetchUserData()

    return (
        <>
            {userData && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="rounded-full border border-white">
                            <UserAvatar imageUrl={userData.images.length > 1 ? userData.images[1].url : ""} userName={userData.display_name} />
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
            )}
        </>
    )
}
