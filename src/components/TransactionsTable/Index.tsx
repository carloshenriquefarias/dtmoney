import { Container } from "./Styles";
import { useTransactions } from '../../hooks/useTransactions';
// import { useContext } from 'react'

export function TransactionsTable(){

    const {transactions} = useTransactions();  

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td className="newtransiction">{transaction.title}</td>
                                <td className={transaction.type}>
                                    {/* FORMATAÇÃO EM REAIS */}
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}                                    
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(                              
                                        new Date(transaction.createdAt)
                                    )}                                      
                                </td>
                            </tr>  
                        )
                    })}
                                     
                </tbody>
            </table>
        </Container>
    );
}