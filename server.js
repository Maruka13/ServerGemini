import express from "express"

const posts = [
    {
        descrição: "Foto teste",
        imagem: "http://placecats.com/millie/300/150",    //exemplo

        descrição: "Foto teste2",
        imagem: "http://placecats.com/millie/300/150",

        descrição: "Foto teste3",
        imagem: "http://placecats.com/millie/300/150",

        descrição: "Foto teste4",
        imagem: "http://placecats.com/millie/300/150",

        descrição: "Foto teste5",
        imagem: "http://placecats.com/millie/300/150",

        descrição: "Foto teste6",
        imagem: "http://placecats.com/millie/300/150",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});