import Image from "next/image"
import LoginButton from "./spotify-login-button"

const Auth = () => {
    return (
        <>
            <div className="grid grid-rows-2 grid-cols-2 grid-flow-col pt-4 h-full px-4 md:px-0">
                <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2">
                    <Image src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={1080} width={1080} alt="login" className="object-cover rounded-t-xl md:rounded-l-xl h-full w-full" />
                </div>
                <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2 flex flex-col m-auto items-center justify-center items-center w-full h-full bg-neutral-800 rounded-b-xl md:rounded-r-xl pb-8 px-8">
                    <h1 className="text-3xl font-bold">Welcome to <b>ZTIFY</b></h1>
                    <p className="mt-6 mb-8 text-md">To use this app use your spotify account</p>
                    <LoginButton />
                </div>
            </div>
        </>
    )
}

export default Auth
