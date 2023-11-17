const Container = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <div className="container bg-container rounded-2xl p-4">
                {children}
            </div>
        </>
    )
}

export default Container