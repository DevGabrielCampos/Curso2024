let numero1;
let numero2;

let opcaoUsuario = 1;
let operadorSelecionado;

while (opcaoUsuario != 2) {
    operadorSelecionado = Number(prompt('Digite o operador para realizar o cálculo\n1 - soma\n2 - subtração\n3- multiplicação\n4- divisão'));

    if (operadorSelecionado == 1) {
        numero1 = Number(prompt('Primeiro número'));
        numero2 = Number(prompt('Segundo número'));

        alert('O resultado da soma é: ' + (numero1 + numero2));
    } 

    if (operadorSelecionado == 2) {
        numero1 = Number(prompt('Primeiro número'));
        numero2 = Number(prompt('Segundo número'));

        alert('O resultado da subtração é: ' + (numero1 - numero2));
    }

    if (operadorSelecionado == 3) {
        numero1 = Number(prompt('Primeiro número'));
        numero2 = Number(prompt('Segundo número'));

        alert('O resultado da subtração é: ' + (numero1 * numero2));
    }

    if (operadorSelecionado == 4) {
        numero1 = Number(prompt('Primeiro número'));
        numero2 = Number(prompt('Segundo número'));

        alert('O resultado da subtração é: ' + (numero1 / numero2));
    }

    opcaoUsuario = Number(prompt('Deseja realizar outra conta?\n1 - sim \n2 - não'));
}


