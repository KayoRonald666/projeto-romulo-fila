import express from "express";
import cors from "cors";
import path from "path";
import { env } from "./config/index.js";
import { PriorityQueue } from "./queue/index.js";

const queue = new PriorityQueue();

queue.enqueue("João Oliveira", 5);
queue.enqueue("Maria Santos", 7);
queue.enqueue("Luiz da Silva", 3);

const app = express();
const port = env.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/queue", (req, res) => {
  res.status(200).json({
    stack: queue.items,
  });
});

app.post("/enqueue", (req, res) => {
  const element = req.body.element;
  const prioridade = Number(req.body.prioridade) || 0;

  const node = queue.enqueue(element, prioridade);
  res.status(201).json({
    id: node?.id || null,
    nome: node?.nome || null,
    prioridade: node?.prioridade || null,
  });
});

app.get("/dequeue", function (req, res) {
  const node = queue.dequeue();
  res.status(200).json({
    id: node?.id || null,
    nome: node?.nome || null,
    prioridade: node?.prioridade || null,
  });
});

app.get("/size", (req, res) => {
  const size = queue.size();
  res.status(200).json({ size: size });
});

app.get("/empty", (req, res) => {
  const isEmpty = queue.isEmpty();
  res.status(200).json({ isEmpty: isEmpty });
});

app.get("/rear", (req, res) => {
  const node = queue.rear();
  res.status(200).json({
    id: node?.id || null,
    nome: node?.nome || null,
    prioridade: node?.prioridade || null,
  });
});

app.get("/front", (req, res) => {
  const node = queue.front();
  res.status(200).json({
    id: node?.id || null,
    nome: node.nome,
    prioridade: node.prioridade,
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
