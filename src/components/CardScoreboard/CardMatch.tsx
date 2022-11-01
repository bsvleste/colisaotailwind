import { ScoreboardMatchProps } from ".";
import { FirstMatch } from "./FirstMatch"
import { SecondMatch } from "./SecondMatch"
import Can from "../Can";
import { Button } from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { Trash } from "phosphor-react";
type CardMatchProps = {
    info: ScoreboardMatchProps;
}
export function CardMatch({ info }: CardMatchProps) {
    const { _id, dataPartida, primeiroQuadro, segundoQuadro } = info;
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

            <SecondMatch segundo={segundoQuadro} />
            <FirstMatch primeiro={primeiroQuadro} />
            <div className="w-full sm:w-[35.5rem] flex justify-between tems-center">
                <Can roles={['administrator']}>
                    <Button.Root color="bg-red" size="sm">
                        <Button.Icon><Trash />Deletar</Button.Icon>
                    </Button.Root>
                </Can>
            </div>

        </>
    )
}