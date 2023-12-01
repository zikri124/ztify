const Container = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <div className="bg-container rounded-2xl">
                {children}
            </div>
        </>
    )
}

export default Container