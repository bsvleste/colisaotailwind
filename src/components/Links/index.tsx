import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts"

export function Links(){
    const{signOut} = useContext(AuthContext)
    async function handleSingOut(){
        signOut();
    }
    return(
        <div className="flex items-center space-x-6 font-bold text-black">
            <>
                <Link className="active:bg-slate-400" to="/" >Resultado</Link>
                <Link className="" to="/bid">bid</Link>                
                <a className="" href="#" onClick={handleSingOut}>Logoff</a>
            </>             
        </div>
    )
}