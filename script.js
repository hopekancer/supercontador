function contar() {
  //cria a funcao contar()
  let ini = document.getElementById("txti"); //cria variavel "ini" que pega otexto do elemento id="txti" relativo ao input inicio
  let fim = document.getElementById("txtf"); //cria variavel "fim" que pega o texto do elemento id="txtf" relativo ao input fim
  let passo = document.getElementById("txtp"); //cria variavel "passo" que pega o texto do elemento de id="txtp" relativo ao input do passo
  let res = document.getElementById("res"); //cria variavel "res" que pega do elemento de id="res" relativo à div "resposta"

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    //testa para ver se as variaveis ini, fim e passo estao vazias, ou sao iguais a zero
    res.innerHTML = "impossivel contar";
    //window.alert("ERRO faltam dados");
  } else {
    //caso nao estejam vazias, ou seja, caso haja conteudo nos inputs relativos as id="ini", id="fim" e id="passo"
    res.innerHTML = "contando: <br>"; // revela no html a mensagem "contando"
    let i = Number(ini.value); //pega o valor numerico da variavel ini
    let f = Number(fim.value); //pega o valor numerico da variavel fim
    let p = Number(passo.value); //pega o valor numerico da variavel passo

    if (p <= 0) {
      //caso seja selecionado o passo igual ou menor que zero, o browser vai travar pq nao tem como contar com passo 0 ou negativo
      window.alert("passo invalido! Considerando passo 1"); //exibe mensagem de erro no navegador
      p = 1; //passo recebe o valor de 1
    }

    if (i < f) {
      //verifica se o valor do inicio foi MENOR que o valor do final:
      //caso sim : contagem progressiva
      for (let c = i; c <= f; c += p) {
        //faz um laço de repeticao com inicializador c = i (relativo ao valor numerico da variavel ini); um teste logico c <= f (que verifica se a variavel ini é menor ou igual a variavel fim) e um incremento c += p (que soma o valor de passo à variavel ini).
        res.innerHTML += ` ${c} \u{1F449}`; //para cada iteracao do laço, incrementa no elemento de id="res" o valor da variavel c
      }
    } else {
      //caso o valor de inicio for MAIOR que o valor de final
      //contagem regressiva
      for (let c = i; c >= f; c -= p) {
        //faz um laço de repetição com inicializador c = i(relativo ao valor numerico da variavel ini); executa o teste logico c >= f (verificando se o valor de c é maior ou igual ao falor de f(fim) e de incremento c =- p (retirando o valor de passo do valor de inicio
        res.innerHTML += ` ${c} \u{1F449}`; //para cada iteracao incrementa o valor de c - junto com o emoji de setinha - dentro da div com id="ref"
      }
    }
    res.innerHTML += ` \u{1f3c1}`; //adiciona ao final do loop um emoji de bandeirinha
  }
}
