import { BackButton } from "./back-button"
import { DropdownUserMenu } from "./dropdown-user-menu"

const Header = async () => {
    
    return (
        <>
            <div className='flex justify-between items-center w-full px-4 py-4 border-b-2'>
                <div className="flex gap-2 items-center">
                    <BackButton />
                </div>
                <DropdownUserMenu />
            </div>
        </>
    )
}

export default Header
