import { useNavigate } from "react-router-dom";

export function Button(){
    let navigate = useNavigate();
    return  <button className="rounded-md text-black bg-colisao-500  w-full sm:w-[35.5rem] h-14 mt-8 mb-8" onClick={()=>navigate('/signin')}>Sign In Now</button>
}