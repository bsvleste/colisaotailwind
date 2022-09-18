import { ScoreboardMatchProps } from ".";
import { FirstMatch } from "./FirstMatch"
import { SecondMatch } from "./SecondMatch"
import Can from "../Can";
import { Button } from "../Button";
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
                <Can roles={['administrator']}>
                    <div className="w-full sm:w-[35.5rem] flex justify-between tems-center">
                        <button className="sm:w-2/5 rounded-md text-black bg-colisao-500 w-full  h-14 mt-8 mb-8">Editar</button>
                        <button className="ml-3 sm:w-2/5  rounded-md text-colisao-500 bg-slate-900 w-full  h-14 mt-8 mb-8">Deletar</button>
                    </div>                   
                </Can>
           
        </>
    )
}