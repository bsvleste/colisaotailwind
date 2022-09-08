import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    RouteProps
  } from "react-router-dom";
import { isAuthenticated,  } from './Auth';
import { Bid } from "./pages/Bid";
import { Scoreboard } from "./pages/Scoreboard";
import { SignIn } from "./pages/SignIn";
import { WelCome } from "./pages/Welcome";
/* import Login from './Login/Login';
import CriaUsuario from './Login/CriaUsuario';
import Bid from './Bid/Bid';
import Home from './Home/Home';
import Mensalidade from './Mensalidade/Mensalidade';
import { Registro } from './Registro/Registro';
 */
/* const RotasPrivadas = ({ component, ...rest }:RouteProps) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) :
        (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)
  */

const PrivateRoutes = ({Item})=>{

    const signed = isAuthenticated();
    return signed ? <Item />: <SignIn/>
}
const Rotas = () => (
    
    <BrowserRouter>
      <Routes>
        <Route  path="/bid" element={<PrivateRoutes Item={Bid}/>}/>
        <Route  path="/sign-in" element={<SignIn />}/>
        <Route  path="/scoreboard" element={<Scoreboard />}/>
        <Route  path="/" element={<WelCome />}/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
)



export default Rotas; 