import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs';
import {App} from './App';



createServer({
  models: {
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance de desenvolvimento mobile',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),

        },
        {
          id: 2,
          title: 'Fatura cartão de crédito',
          type: 'withdraw',
          category: 'Contas',
          amount: 600,
          createdAt: new Date('2021-05-12 09:00:00'),

        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all('transactions');
      
    }); 

    this.post('/transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data);
    })

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
