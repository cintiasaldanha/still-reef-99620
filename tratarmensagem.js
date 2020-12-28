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
    
        console.log(operandos, operandos.length);

        var operando1;
        var operacao;
        var operando2;

        switch (String(operandos.length)) {
            //Ambos operadores negativos
            case "7":
                operando1 = String(operandos[1])+String(operandos[2]);
                operacao= String(operandos[3]);
                operando2 = String(operandos[5])+String(operandos[6]);
                break;
            //Ambos operadores positivos
            case "3":
                operando1 = String(operandos[0]);
                operacao= String(operandos[1]);
                operando2 = String(operandos[2]);
                break;
            //Apenas primeiro operador negativo OU Apenas segundo operador negativo  
            case "5":
                if (String(operandos[0])==''){
                    operando1 = String(operandos[1])+String(operandos[2]);
                    operacao= String(operandos[3]);
                    operando2 = String(operandos[4]);
                }
                else {
                    operando1 = String(operandos[0]);
                    operacao= String(operandos[1]);
                    operando2 = String(operandos[3])+String(operandos[4]);
                }
                break;
            default:
                return ">>>ATENÇÃO: Informe uma operação em formato válido. Exemplo: -1/-1"
                break;
            }
    
        var resultado = myFunctions.calcularResultadoPorOperacao(operando1,operando2,operacao);
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