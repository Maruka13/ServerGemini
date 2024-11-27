import express from "express"
import conectarAoBanco from "./src/config/dbConfig.js";

const posts = [
    {id:1, descrição: "Foto teste", imagem: "http://placecats.com/millie/300/150"},
    {id:2, descrição: "Foto teste2", imagem: "http://placecats.com/millie/300/150"},
    {id:3, descrição: "Foto teste3", imagem: "http://placecats.com/millie/300/150"},   
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});