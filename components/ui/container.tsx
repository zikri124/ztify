const Container = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <div className="bg-container rounded-2xl md:bg-neutral-900 md:rounded-xl md:px-6 md:my-2 md:me-2 min-h-full pb-6">
                {children}
            </div>
        </>
    )
}

export default Container