import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContexts"



export function Bid(){
    const {user} = useContext(AuthContext)
    return <h1 className="text-slate-300 mx-auto">{user?.nome}</h1>
}