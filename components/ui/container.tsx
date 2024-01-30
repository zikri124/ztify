const Container = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <div className="bg-container h-full w-full overflow-y-auto rounded-none md:bg-neutral-900 md:rounded-xl px-0 md:px-6 pb-6 flex flex-col justify-between">
                {children}
            </div>
        </>
    )
}

export default Container