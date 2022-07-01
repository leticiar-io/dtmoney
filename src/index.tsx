import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer} from "miragejs"
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes() {
    this.namespace = "api"; //Todas URL que tiverem /api/
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date()
        }
      ]
    }) //Rota de busca ou listagem 
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);