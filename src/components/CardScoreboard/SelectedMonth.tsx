import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";


export function SelectedMonth(){
    return (
        <div className="flex justify-between w-56 items-center ">
            <div><ArrowCircleLeft size={46} className="text-colisao-500"/></div>
            <div className="text-colisao-500 font-bold font"><h1>Janeiro</h1></div>
            <div><ArrowCircleRight size={46} className="text-colisao-500"/></div>
        </div>
    )
}