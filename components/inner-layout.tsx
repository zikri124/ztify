import isMobileSize from "../app/utils/get-window-size"
import Navbar from "./navbar/navbar"
import Header from "./header/header"
import Container from "./ui/container"

const InnerMainLayout = ({ children }: { children: React.ReactNode }) => {
    const isMobile: boolean = true

    const flexSet = {
        mobile: 'flex flex-col',
        desktop: 'flex flex-row'
    }

    return (
        <>
            <div className={"h-screen " + (isMobile ? flexSet.mobile : flexSet.desktop)}>
                <div className={"grow-0 " + (isMobile ? "order-2" : "order-1")}>
                    <Navbar isMobile={isMobile} />
                </div>
                <div className={"grow h-full overflow-y-auto " + (isMobile ? "order-1 bg-container" : "order-2")}>
                    <Container>
                        {!isMobile && <Header isMobile={true} />}
                        {children}
                    </Container>
                </div>
            </div>
        </>
    )
}

export default InnerMainLayout
