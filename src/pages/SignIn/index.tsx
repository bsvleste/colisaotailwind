import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormSigin } from "../../components/FormSigin";
import { isAuthenticated } from "../../Auth";

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