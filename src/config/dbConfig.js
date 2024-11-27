import { mongoClient } from "mongodb"

export default async function conectarAoBanco(stringConexao) {
let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do banco de dados...");
        await mongoClient.conect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongoClient;
    } catch (erro) {
        console.error("Falha na coneão com o banco de dados.", erro);
        process.exit();
    }
}