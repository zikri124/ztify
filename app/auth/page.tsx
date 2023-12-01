import Image from "next/image"
import LoginButton from "./spotify-login-button"

const Auth = () => {
    return (
        <>
            <div>
                <Image src="https://images.unsplash.com/photo-1526394931762-90052e97b376?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={480} width={480} alt="login" className="object-cover w-screen h-[40vh]" />
            </div>
            <div className="flex flex-col m-auto items-center justify-center items-center w-full h-[50vh]">
                <h1 className="text-4xl font-bold">Login</h1>
                <p className="mt-6 text-lg">Welcome to <b>ZTIFY</b>, to use this app</p>
                <p className="mb-8 text-lg">use your spotify account</p>
                <LoginButton />
            </div>
        </>
    )
}

export default Auth
