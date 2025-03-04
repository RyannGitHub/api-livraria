import express from "express";
import LivroControler from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroControler.listarLivros);
routes.get("/livros/:id", LivroControler.listarLivroPorID);
routes.post("/livros", LivroControler.cadastrarLivro);
routes.put("/livros/:id", LivroControler.atualizarLivro);
routes.delete("/livros/:id", LivroControler.deletarLivro);

export default routes;