import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Auth";
import { FormSigin } from "../../components/FormSigin";


export function  SignIn(){
    let navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated()) {
            navigate("/");
          }
    },[])
    return (
        
            <FormSigin/>
       
    )
}