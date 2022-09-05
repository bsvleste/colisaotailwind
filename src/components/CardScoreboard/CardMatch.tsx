import { FirstMatch } from "./FirstMatch"
import { SecondMatch } from "./SecondMatch"

type CardMatchProps={
    dataMatch:string;
    scoreboarSecondMatch:string;
    scoreboarFirstMatch:string
}
export function CardMatch({dataMatch,scoreboarSecondMatch,scoreboarFirstMatch}:CardMatchProps){
    return (
        <>         
            <h1 className="font-bold mt-4 text-colisao-500">{dataMatch}</h1>    
            <SecondMatch scoreboarSecondMatch={scoreboarSecondMatch}  />
            <FirstMatch scoreboarFirstMatch={scoreboarFirstMatch}/>
        </>
    )
}