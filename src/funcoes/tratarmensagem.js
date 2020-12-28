//Módulo desenvolvido durante o curso, contendo as funções de cálculo matemático
//e publicado no NPM
const myFunctions = require("math-asd-of13");

//Função para tratar a mensagem recebida via Web Socket, contendo a operação desejada
//Retorna o resultado do cálculo ou mensagem de erro, se for o caso
const tratarMensagemRecebida = function (texto) {
    try{

        let separadores = ['+', '-', '/','*'];
        let operandos = texto.split(new RegExp('(['+ separadores.join('') + '])')).map(function(i){
        return i.trim();
        });
    
        console.log(operandos);
    
        var resultado = myFunctions.calcularResultadoPorOperacao(operandos[0],operandos[2],operandos[1]);
        var mensagemRetorno = "O resultado da operação: " + texto + " é : " + resultado;
        return mensagemRetorno;

    }
    catch (ex) {
       return ex.message;
    }
}

module.exports = {
    tratarMensagemRecebida
};