import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { Container } from "../../componentes/Container";

export function Scoreboard(){
    return (
        <Container>
            <div className="flex flex-col justify-center mb-8 items-center">

                <button className="rounded-md text-black bg-colisao-500  w-full sm:w-[35.5rem] h-14 mt-8 mb-8">Sign In Now</button>
           
            
                <div className="flex justify-between w-56 items-center ">
                    <div><ArrowCircleLeft size={46} className="text-colisao-500"/></div>
                    <div className="text-colisao-500 font-bold font"><h1>Janeiro</h1></div>
                    <div><ArrowCircleRight size={46} className="text-colisao-500"/></div>
                </div>
            
                <div className="mt-8 w-full sm:w-[35.5rem] bg-colisao-500 h-48 flex flex-col justify-center items-center">

                    <h1 className="">15/01/2002</h1>
                    <h3 className="mt-2">2°Quadro</h3>
                    <div className="w-full mt-14 flex justify-around items-center">
                        <h1>Colisao</h1>
                        <h3> 9x2</h3>
                        <h1>adversario</h1>
                    </div>
                </div>
                
                <div className="w-full sm:w-[35.5rem] text-slate-200 bg-gray-800 h-48 flex flex-col justify-center items-center">
                    <h3 className="mt-2">1°Quadro</h3>
                    <div className="w-full mt-14 flex justify-around items-center">
                        <h1>Colisao</h1>
                        <h3> 9x2</h3>
                        <h1>adversario</h1>
                    </div>
                </div>
            </div>

        </Container>
    )
}