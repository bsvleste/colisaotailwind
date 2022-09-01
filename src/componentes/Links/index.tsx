import { useState } from "react"

export function Links(){
    const [isLogged,setIsLogged] = useState(true)
    return(
        <div className="flex items-center space-x-6 font-bold">
            {
                isLogged? <a href="#" onClick={()=>setIsLogged(false)}>Sign-in</a>
                :
                    <>
                        <a className="active:bg-slate-400" href="#" >Resultado</a>
                        <a className="" href="#">bid</a>                
                        <a className="" href="#" onClick={()=>setIsLogged(true)}>Logoff</a>
                    </>
                
            }
                            
        </div>
    )
}