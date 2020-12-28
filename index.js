const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const tratarMensagemRecebida = require("./src/funcoes/tratarmensagem").tratarMensagemRecebida

const app = express();

app.use("/", express.static("./src/site"));

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor conectado na porta:", server.address().port);
});

//Inicializa um instancia de servidor websocket a partir do servidor http
const wss = new WebSocket.Server({ server });

// Função responsável por manusear a conexão websocket
wss.on("connection", (ws) => {
  // Função que trata as mensagens recebidas pelo servidor
  ws.on("message", (message) => {
    console.log("Mensagem recebida: ", message);

    //Trata a mensagem recebida, efetuando o cálculo matemático solicitado
    ws.send(tratarMensagemRecebida(message));
    
  });
});


