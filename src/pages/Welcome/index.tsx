import { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Auth";
import { AuthContext } from "../../contexts/AuthContexts";


export function WelCome(){
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(()=>{
        if (isAuthenticated()) {
            navigate("/");
          }
    },[])
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 mx-3 sm:mx-auto">
           
            <div className="flex justify-center items-center mb-2">
                <img src="/img/logoColisao.png" />
            </div>               
            
            <div className="flex flex-col justify-center sm:bg-colisao-500 sm:text-black sm:items-center  sm:h-screen">
               <div className="w-9/12 sm:w-3/6 text-center mx-auto  mb-4">
                    Bem Vindo a pagina do <strong>Colisão</strong> Para ver os resultados <NavLink className=" text-yellow-100 hover:text-yellow-600 sm:text-slate-400 sm:hover:text-slate-500 transition-colors"  to="/scoreboard">clique aqui</NavLink>
               </div>
               <button className="rounded-md text-black bg-colisao-500 sm:bg-black sm:text-colisao-500 w-full sm:w-[90%] sm:mx-auto h-14" onClick={()=>{navigate("/signin")}}>Sign In Now</button>
            </div>
                
        </div>
        
        </>
    )
}