import { Button } from "./Button";
import { Container } from "../Container";
import { SelectedMonth } from "./SelectedMonth";
import { CardMatch } from "./CardMatch";

export function CardScoreboard(){
    return (
        <Container>
            <Button />              
            <SelectedMonth />
            <CardMatch dataMatch="15/01/2022" scoreboarSecondMatch="9 X 5"  scoreboarFirstMatch="5 X 5"/>
            <CardMatch dataMatch="22/01/2022" scoreboarSecondMatch="10 X 8"  scoreboarFirstMatch="8 X 8"/>
            <CardMatch dataMatch="02/02/2022" scoreboarSecondMatch="9 X 5"   scoreboarFirstMatch="9 X 5"/>
        </Container>
    )
}