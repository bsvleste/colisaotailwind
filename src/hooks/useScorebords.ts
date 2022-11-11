import { useQuery } from "react-query";
import { ScoreboardMatchProps } from "../components/CardScoreboard";
import { api } from "../services/api";
export async function getScoreboards():Promise<ScoreboardMatchProps[]>{
    
        const { data } = await api.get('/placar');
    
        const scoreboards = data.map((scoreboard: ScoreboardMatchProps) => {
          return {
            _id: scoreboard._id,
            segundoQuadro: {
              segundoColisao: scoreboard.segundoQuadro.segundoColisao,
              segundoAdversario: scoreboard.segundoQuadro.segundoAdversario,
            },
            primeiroQuadro: {
              primeiroColisao: scoreboard.primeiroQuadro.primeiroColisao,
              primeiroAdversario: scoreboard.primeiroQuadro.primeiroAdversario
            },
            dataPartida: scoreboard.dataPartida
          }
        })
        return scoreboards      
}

export function useScoreboards(){
    return useQuery('colisaoQuery', getScoreboards, {
        staleTime:100*5
    })
} 