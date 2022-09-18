import { Button } from "./Button";
import { Container } from "../Container";
import { SelectedMonth } from "./SelectedMonth";
import { CardMatch } from "./CardMatch";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { addMonths, subMonths } from "date-fns";
import { AuthContext } from "../../contexts/AuthContexts";
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
  const { isAuthenticated}= useContext(AuthContext)
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
        <div className="mx-3 sm:mx-auto">
          <div className="container flex flex-col justify-center mb-8 items-center w-full ">
            
            {isAuthenticated ? "": <Button />              
            }
            <SelectedMonth selectedDate={selectedDate} handleChangeDate={handleChangeDate}/>

                  {
                    isLoading ? <h1>Ola</h1>:scoreboard.map((data)=>(
                      <CardMatch key={data._id} info={data}/>                                     
                      ))   
                    }           

               <div className="w-full sm:w-[35.5rem] flex justify-between tems-center ">
                <button className="rounded-md text-black bg-colisao-500  w-full sm:w-[35.5rem] h-14 mb-16">Novo Placar</button>
              </div> 
            </div>
                 
        </div>
    )
}