import express, { response } from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  const nome = request.query.nome;
  const age = request.query.age;

  return response.status(200).send({ usuario: nome, idade: age });
});

app.get("/:nome", (request, response) => {
  const nome = request.params.nome;
  const age = request.params.age;
  return response.status(200).send({ usuario: nome, idade: age });
});

app.post("/", (request, response) => {
  return response.status(200).send({ message: "Rota POST" });
});

app.put("/", (request, response) => {
  return response.status(200).send({ message: "Rota PUT" });
});

app.delete("/", (request, response) => {
  return response.status(200).send({ message: "Rota DELETE" });
});

app.listen(port, () => {
  console.log(`⚡ Server started on http://localhost:${port}`);
});
