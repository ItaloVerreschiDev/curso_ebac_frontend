function multiplicar(num1: number, num2: number): number {
    const resultado = num1 * num2;
    console.log(`Multiplicação de ${num1} e ${num2}: ${resultado}`);
    return resultado;
    }
    
    function saudacao(nome: string): string {
    const mensagem = "Olá " + nome;
    console.log(mensagem);
    return mensagem;
    }
    
    multiplicar(5, 3);
    saudacao("Italo");