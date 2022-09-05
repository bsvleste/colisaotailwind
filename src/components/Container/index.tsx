export function Container({children}){
    return (
        <div className="container mx-auto flex flex-col justify-center" >
            <div className="flex flex-col justify-center mb-8 items-center">
                {children}
            </div>
        </div>)
}