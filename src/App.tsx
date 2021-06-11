import styled from "styled-components";
import Modal from 'react-modal';
import React, { useState } from  'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalSyle } from "./styles/global";
import { NewTransacionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from './hooks/useTransaction';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);

  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <TransactionsTable/>

     <NewTransacionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
  
      <GlobalSyle/>
    </TransactionsProvider>
  );
}

