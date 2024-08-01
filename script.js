let nomeRango = "";
let valorRango = 0;
let nomeBebida = "";
let valorBebida = 0;
let nomeDoce = "";
let valorDoce = 0;

function selecionarPrato(botao, nome, valor) {
  const botaoSelecionadoAntes = document.querySelector(".prato .selecionado");
  let checkmark = botao.children[4];
  nomeRango = nome;
  valorRango = valor;

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionado");
    let checkmarkanterior = botaoSelecionadoAntes.children[4];
    checkmarkanterior.classList.remove("check");
  }

  botao.classList.add("selecionado");
  checkmark.classList.add("check");

  if (nomeRango !== "" && nomeBebida !== "" && nomeDoce !== "") {
    const botaofechar = document.querySelector(".botao-fim");
    botaofechar.classList.add("verdinho");

    const texto2 = document.getElementById("texto-botao");
    texto2.innerHTML = "Fechar pedido";
  }
}

function selecionarBebida(botao, nome, valor) {
  const botaoSelecionadoAntes = document.querySelector(".bebida .selecionado");
  let checkmark = botao.children[4];
  nomeBebida = nome;
  valorBebida = valor;

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionado");
    let checkmarkanterior = botaoSelecionadoAntes.children[4];
    checkmarkanterior.classList.remove("check");
  }

  botao.classList.add("selecionado");
  checkmark.classList.add("check");

  if (nomeRango !== "" && nomeBebida !== "" && nomeDoce !== "") {
    const botaofechar = document.querySelector(".botao-fim");
    botaofechar.classList.add("verdinho");

    const texto2 = document.getElementById("texto-botao");
    texto2.innerHTML = "Fechar pedido";
  }
}

function selecionarSobremesa(botao, nome, valor) {
  const botaoSelecionadoAntes = document.querySelector(
    ".sobremesa .selecionado"
  );
  let checkmark = botao.children[4];
  nomeDoce = nome;
  valorDoce = valor;

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionado");
    let checkmarkanterior = botaoSelecionadoAntes.children[4];
    checkmarkanterior.classList.remove("check");
  }

  botao.classList.add("selecionado");
  checkmark.classList.add("check");

  if (nomeRango !== "" && nomeBebida !== "" && nomeDoce !== "") {
    const botaofechar = document.querySelector(".botao-fim");
    botaofechar.classList.add("verdinho");

    const texto2 = document.getElementById("texto-botao");
    texto2.innerHTML = "Fechar pedido";
  }
}

function fecharpedido() {
  if (nomeRango !== "" && nomeBebida !== "" && nomeDoce !== "") {
    const confirmacao = document.querySelector(".confirmacao");
    confirmacao.classList.remove("oculto");
  }

  let valorfinal = (valorRango + valorBebida + valorDoce).toFixed(2);

  const nomefood = document.getElementById("texto-comida");
  nomefood.innerHTML = nomeRango;

  const nomedrink = document.getElementById("texto-bebida");
  nomedrink.innerHTML = nomeBebida;

  const nomedessert = document.getElementById("texto-sobremesa");
  nomedessert.innerHTML = nomeDoce;

  const valorfood = document.getElementById("valordacomida");
  valorfood.innerHTML = "R$ " + valorRango.toFixed(2);

  const valordrink = document.getElementById("valordabebida");
  valordrink.innerHTML = "R$ " + valorBebida.toFixed(2);

  const valordessert = document.getElementById("valordasobremesa");
  valordessert.innerHTML = "R$ " + valorDoce.toFixed(2);

  const valorsoma = document.getElementById("soma");
  valorsoma.innerHTML = "R$ " + valorfinal;

  const linkwhats = document.getElementById("whatsapp");
  let msg = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomeRango}\n- Bebida: ${nomeBebida} \n- Sobremesa: ${nomeDoce}\n Total: R$${valorfinal}`;
  msg = encodeURIComponent(msg);
  msg = `https://wa.me/5511951046224?text=${msg}`;

  linkwhats.setAttribute("href", `${msg}`);
}

function cancelando() {
  const cancelado = document.querySelector(".confirmacao");
  cancelado.classList.add("oculto");
}
