import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

type Props = {
    imageUrl: string, 
    userName: string
}

const UserAvatar = ({ imageUrl, userName }: Props) => {
    return (
        <Avatar className="m-1">
            <AvatarImage src={imageUrl} alt="@shadcn" />
            <AvatarFallback>{userName.slice(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar
