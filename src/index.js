import express from "express";

const app = express();

// Rota para listar tarefas

// Rota para alterar tarefas

// Rota para deletar tarefas

app.get('/', (req, res) => {
  return res.json({'message': 'Weeeeeeeeee'})
});

// Rota para criar tarefas

app.listen(3000);
