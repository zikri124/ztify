import Navbar from "./navbar/navbar"
import Container from "./ui/container"

const InnerMainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={"screen flex flex-col md:flex-row"}>
                <div className={"flex-none overflow-y-hidden order-2 md:order-1"}>
                    <Navbar />
                </div>
                <div className={"grow h-full overflow-y-auto order-1 md:order-2 md:px-8"}>
                    <Container>
                        {children}
                    </Container>
                </div>
            </div>
        </>
    )
}

export default InnerMainLayout
