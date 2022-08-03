// import { Container } from "../Header/styles";
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable/Index';
import {Container} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Summary/>   
            <TransactionsTable/>                
        </Container>
    );
}