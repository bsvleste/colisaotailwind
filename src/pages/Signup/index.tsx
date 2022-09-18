import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FromSignup } from "../../components/FormSigup";
import { isAuthenticated } from "../../Auth";

export function Signup(){
    let navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated() ) {
            navigate("/");
          }
    },[])
    return (
        
        <FromSignup/>
    )
}