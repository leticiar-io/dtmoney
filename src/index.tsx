import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from "miragejs"
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1, //sempre tem que ter
          title: "Freelancer de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00")
        },
        {
          id: 2, //sempre tem que ter
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-02-14 11:00:00")
        },
      ]
    })
  },

  routes() {
    this.namespace = "api"; //Todas URL que tiverem /api/
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    }) //Rota de busca ou listagem 
 
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody) //Schema é o bd

      return schema.create("transaction", data);
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);