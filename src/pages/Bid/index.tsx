import { useContext } from "react"
import Can from "../../components/Can"
import { CardScoreboard } from "../../components/CardScoreboard"
import { AuthContext } from "../../contexts/AuthContexts"



export function Bid(){
    const {user} = useContext(AuthContext)
    return (
            
          <h1>Bem Vindo ao Bid</h1>
                
           
        )
}