import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { User } from "@/types/user"
import fetchUserData from "@/utils/spotify/fetch-user-data"
import UserAvatar from "../ui/user-avatar"

const DropdownUserMenu = async () => {
    const userData: User = await fetchUserData()

    return (
        <>
            {userData.images && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="rounded-full border border-white">
                            <UserAvatar imageUrl={userData.images?.length > 1 ? userData.images[0].url : ""} userName={userData.display_name}/>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                            <DropdownMenuItem disabled>
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

export default DropdownUserMenu
