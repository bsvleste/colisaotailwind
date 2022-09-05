
type ButtonProps={
    background:string
}

export function Button({background}:ButtonProps){
    return <button className="rounded-md text-black  w-full sm:w-[35.5rem] h-14 mt-8 mb-8">Sign In Now</button>
}