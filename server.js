import express from "express"

cost posts = [
    {
        descrição: "Foto teste",
        imagem: "http://placecats.com/millie/300/150",    //exemplo
    }
]

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Rota inicial.");
});