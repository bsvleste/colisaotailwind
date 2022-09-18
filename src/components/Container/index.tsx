export function Container({children}){
    return (
        <div className="container mx-3 sm:mx-auto flex flex-col justify-center" >
            <div className="flex flex-col justify-center mb-32 items-center">
                {children}
            </div>
        </div>)
}