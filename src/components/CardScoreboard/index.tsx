import { SelectedMonth } from "./SelectedMonth";
import { CardMatch } from "./CardMatch";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { addMonths, subMonths } from "date-fns";
import { AuthContext } from "../../contexts/AuthContexts";
import Can from "../Can";
import { Button } from "../Button";
import { Envelope, SoccerBall } from "phosphor-react";
import { useQuery } from "react-query";
import { useScoreboards } from "../../hooks/useScorebords";
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
export function CardScoreboard() {

  const { data, isLoading, isFetching, error } = useScoreboards()
  const { isAuthenticated, user } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  async function getScoreboard() {
    const resultsMont = data.filter(
      (res: ScoreboardMatchProps) =>
        new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
        new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear()
    );
    setScoreboard(resultsMont);

  }
  useEffect(() => {
    getScoreboard();
  }, [selectedDate, isModalOpen]);

  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }
  return (
    <div className="mx-3 sm:mx-auto">
      <div className="container flex flex-col justify-center mb-8 items-center w-full ">

        <div className="w-full sm:w-[35.5rem] flex justify-between tems-center mt-3 ">
          {isAuthenticated ? "" : <Button.Root size="lg" color="bg-yellow" ><Button.Icon><Envelope /></Button.Icon> SIGN IN</Button.Root>
          }

          <Can roles={['administrator']}>
            <Button.Root color="bg-yellow" size="lg">
              <Button.Icon>
                <SoccerBall />
              </Button.Icon>
              Novo Placar
            </Button.Root>
          </Can>
        </div>
        <SelectedMonth selectedDate={selectedDate} handleChangeDate={handleChangeDate} />
        {
          isLoading ? <h1>Loading....</h1> : scoreboard.map((data) => (
            <CardMatch key={data._id} info={data} isFetching={isFetching} />
          ))
        }

      </div>
    </div>
  )
}