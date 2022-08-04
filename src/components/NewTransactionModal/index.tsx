import Modal from 'react-modal';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){

    const [type, setType] = useState('deposit');
      
    return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder='Titulo'
                />
                <input
                    type="number"
                    placeholder='Valor'
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type='button' 
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        // className={type === 'deposit' ? 'active':''}
                    >
                        <img src={IncomeImg} alt="Entradas" />
                        <span>Entradas</span>
                    </RadioBox>
                    <RadioBox 
                        type='button'
                        onClick={() => {setType('withdraw');}} 
                        isActive={type === 'withdraw'}>
                        <img src={outcomeImg} alt="Saidas" />
                        <span>Saidas</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
          
        </Modal>
    );
}