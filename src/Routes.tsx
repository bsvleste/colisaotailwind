import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    RouteProps,
    Outlet,
    Navigate,
    useLocation,
    useNavigate
  } from "react-router-dom";
import { isAuthenticated,  } from './Auth';
import { Bid } from "./pages/Bid";
import { Scoreboard } from "./pages/Scoreboard";
import { SignIn } from "./pages/SignIn";
import { Signup } from "./pages/Signup";
import { WelCome } from "./pages/Welcome";


const PrivateRoutes = ()=>{
  const location = useLocation();
  const signed = isAuthenticated();
  
  return signed ? (<Outlet />): (<Navigate to="/welcome" state={{from:location}} replace/>)
}
const Rotas = () => (
    
    <BrowserRouter>
      <Routes>
      <Route  path="/signin" element={<SignIn />}/>
      <Route  path="/signup" element={<Signup />}/>
      <Route  path="/scoreboard" element={<Scoreboard />}/>
      <Route  path="/welcome" element={<WelCome />}/>
      
      <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Bid />} />
        <Route path="*" element={<Bid/>} />
      </Route> 
      </Routes>
    </BrowserRouter>
)



export default Rotas; 


/* import {
  BrowserRouter,
  Routes,
  Route,
  RouteProps,
  Outlet,
  Navigate,
  useLocation,
  
} from "react-router-dom";
import { isAuthenticated,  } from './Auth';
import { Bid } from "./pages/Bid";
import { Scoreboard } from "./pages/Scoreboard";
import { SignIn } from "./pages/SignIn";
import { Signup } from "./pages/Signup";
import { WelCome } from "./pages/Welcome";


const PrivateRoutes = ()=>{
  const location = useLocation();
  const signed = isAuthenticated();
  
  return (signed ? <Outlet />: <Navigate to="/welcome" state={{from:location}} replace/>)
}
const Rotas = () => (
  
  <BrowserRouter>
    <Routes>
      {/* <Route  path="/bid" element={<PrivateRoutes Item={Bid}/>}/> 
    }
    {
    */
        /*
         <Route  path="/signin" element={<SignIn />}/>
      <Route  path="/signup" element={<Signup />}/>
      <Route  path="/scoreboard" element={<Scoreboard />}/>
      <Route  path="/welcome" element={<WelCome />}/>
      
      <Route element={<PrivateRoutes/>}>
      <Route path="/bid" element={<Bid />} />

      </Route> 
    }
    {
    */
          /* <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> 
      }
      */
    /* </Routes>
  </BrowserRouter> 
  )
  */