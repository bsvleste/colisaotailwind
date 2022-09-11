import { Button } from "./Button";
import { Container } from "../Container";
import { SelectedMonth } from "./SelectedMonth";
import { CardMatch } from "./CardMatch";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { addMonths, subMonths } from "date-fns";
export interface ScoreboardMatchProps {
    _id: string;
    segundoQuadro: {
      segundoColisao: string;
      segundoAdversario: string;
    };
    primeiroQuadro: {
      primeiroColisao: string;
      primeiroAdversario: string;
    };
    dataPartida: string;
  }
export function CardScoreboard(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [getIdToUpdate, setGetIdToUpdate] = useState('');
    const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
/*     const [data,setData] = useState([]);
 */    async function getScoreboard() {
       const {data} = await  api.get('/placar');
        setIsLoading(false)      
      const resultsMont = data.filter(
        (res: ScoreboardMatchProps) =>
        new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
        new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear()
        ); 
        setScoreboard(resultsMont);
      }
      useEffect(() => {
        getScoreboard();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedDate, isModalOpen]);
      
    function handleChangeDate(action: 'next' | 'prev') {
      if (action === 'next') {
        setSelectedDate(addMonths(selectedDate, 1));
        setIsLoading(!isLoading)
      } else {
        setSelectedDate(subMonths(selectedDate, 1));
        setIsLoading(!isLoading)
      }
    }
    return (
        <Container>
            <Button />              
            <SelectedMonth selectedDate={selectedDate} handleChangeDate={handleChangeDate}/>

                  {
                    isLoading ? <h1>Ola</h1>:scoreboard.map((data)=>(
                      <CardMatch key={data._id} info={data}/>                                     
                    ))   
                  }           
                     
                 
        </Container>
    )
}