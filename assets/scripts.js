function calculadora() {
    const operacao = Number(prompt(`Escolha uma operação:
    1- Soma (+)
    2- Subtração (-)
    3- Multiplicação (*)
    4- Divisão real (/)
    5- Divisão inteira (%)
    6- Potenciação (**)`));

    //verifica se a opção digitada pelo usuário foi correta
    verificaOperacao();

    let n1 = Number(prompt('Digite o primeiro valor: '));
    let n2 = Number(prompt('Digite o segundo valor: '));
    //verifica se os valores foram digitados corretamente
    verificaValores();
    let resultado;

    function verificaOperacao() {
        if (!operacao || operacao >= 7) {
            alert('Operação incorreta, por favor escolha uma das opções');
            calculadora();
        }
    }

    function verificaValores() {
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos :(');
            calculadora();
        }
    }

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão de ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
    }
    // Verifica se o usuário deseja fazer uma nova operação antes de encerrar o programa
    function novaOperacao() {
        let opcao = Number(prompt(`Deseja fazer outra operação?
                1 - Sim
                2- Não`));

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais ;)');
            exit;
        } else {
            alert('Digite uma opção válida')
            novaOperacao();
        }
    }

    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora();