import { PaperPlaneTilt } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Auth";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";


export function WelCome() {
    let navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/");
        }
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 mx-3 sm:mx-auto">

                <div className="flex justify-center items-center mb-2">
                    <Logo />
                </div>

                <div className="flex flex-col justify-center max-w-[500px] sm:bg-black sm:text-yellow-500 sm:items-center  sm:h-screen">
                    <div className="w-9/12 sm:w-3/6 text-center mx-auto  mb-4">
                        Bem Vindo a pagina do <strong>Colisão</strong> Para ver os resultados <NavLink className=" text-text-500 hover:text-yellow-500  transition-colors" to="/scoreboard">clique aqui</NavLink>
                    </div>
                    <Button.Root size="lg" color="bg-yellow" onClick={() => { navigate("/signin") }}>
                        <Button.Icon>
                            <PaperPlaneTilt />
                        </Button.Icon>
                        Login
                    </Button.Root>

                    {/* <button className="rounded-md text-black bg-colisao-500 sm:bg-black sm:text-colisao-500 w-full sm:w-[90%] sm:mx-auto h-14" onClick={() => { navigate("/signin") }}>Sign In Now</button> */}
                </div>

            </div>

        </>
    )
}