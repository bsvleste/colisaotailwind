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
    const [getIdToUpdate, setGetIdToUpdate] = useState('');
    const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('');
    async function getScoreboard() {
      const {data} = await api.get('/placar');
      /* const res = localStorage.getItem('@colisao'); */
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
    } else {
        setSelectedDate(subMonths(selectedDate, 1));
      }
    }
    return (
        <Container>
            <Button />              
            <SelectedMonth selectedDate={selectedDate} handleChangeDate={handleChangeDate}/>
                {scoreboard.map((data)=>( 
                    <div key={data._id}>
                     <CardMatch  info={data}/>
                    </div>                 
                 ))}            
        </Container>
    )
}