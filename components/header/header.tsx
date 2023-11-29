import { DropdownUserMenu } from "./dropdown-user-menu"

const Header = async () => {
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h3 className='text-2xl font-bold'>ZTIFY</h3>
                
                <DropdownUserMenu />
            </div>
        </>
    )
}

export default Header
