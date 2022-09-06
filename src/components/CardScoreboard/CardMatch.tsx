import { useState } from "react";
import { ScoreboardMatchProps } from ".";
import { FirstMatch } from "./FirstMatch"
import { SecondMatch } from "./SecondMatch"
import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'
type CardMatchProps={
    info: ScoreboardMatchProps;
}
export function CardMatch({info}:CardMatchProps){
   
    const {_id,dataPartida,primeiroQuadro,segundoQuadro} = info;
   
    return (
        <>         
            <h1 className="font-bold mt-4 text-colisao-500 text-center">
                {Intl.DateTimeFormat('pt-Br', {
                     timeZone: 'UTC',
                     day: '2-digit',
                     month: '2-digit',
                     year: '2-digit',
          }).format(new Date(dataPartida))}
            </h1>    
           
                <SecondMatch segundo={segundoQuadro}/>
                <FirstMatch primeiro={primeiroQuadro}/>
               
           
        </>
    )
}