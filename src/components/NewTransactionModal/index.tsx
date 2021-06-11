import { FormEvent, useState, useContext} from 'react';

import Modal from 'react-modal';

import { api } from '../../services/api';


import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface newTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}
export function NewTransacionModal({isOpen, onRequestClose} :newTransactionModalProps) {


  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit')

   function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   
  }

    return (
      <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button 
       type="button"
       onClick={onRequestClose}
       className="react-modal-close"
       >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}

        />
        
        <input
           type="number"
           placeholder="Valor"
           value={value}
           onChange={event => setValue(Number(event.target.value))}

        />

      <TransactionTypeContainer>
        
          <RadioBox
           type="button"
           onClick={() => setType('deposit')}
           isActive={type === 'deposit'}
           activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
           type="button" 
           onClick={() => setType('withdraw')}
           isActive={type === 'withdraw'}
           activeColor="red"
           >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        
      </TransactionTypeContainer>

      <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} 
          />

      <button type="submit">
        Salvar
      </button>
      </Container>

     </Modal>
    )
}