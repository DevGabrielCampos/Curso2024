/* let numero = 10;

while(numero >0){
    console.log(numero)
    numero --
}
 */
/* 
let numeroUsuario = 0 

while(numeroUsuario != 0 ){
    numeroUsuario = prompt('digite:\n1 - pra continuar\n0 - pra sair')
    
} */


let vidas = 100

while(vidas !=5){
    vidas = Number(prompt('Digite a opção escolhida\n1 - Ganhador do oscar do melhor filme 2024\n2 - Ganhador(a) do oscar melhor atriz 2024\n3 - Ganhador do oscar do melhor ator 2024 \n4 - Ganhador do oscar de melhor filme de animação 2024 \n5 - Encerrar'));

    switch(vidas) {

        case 1:
            alert("O filme ganhador do Oscar de 2024 foi OPPENHEIMER!")
        break ; 
        case 2:
            alert("A ganhadora do Oscar de melhor atriz foi EMMA STONE!")
        break ;
        case 3:
            alert ("O ganhador do Oscar de melhor ator de 2024 foi CILLIAN MURPHY!")
        break ; 
        case 4: 
            alert ("O ganhador do oscar de melhor filme de animação 2024 foi O MENINO E A GARÇA!")
        break ;
            case 5: alert("Até logo")
            break;
            default:
                alert("Erro. Digite o número correto."); 

            
    }

    
}
 

