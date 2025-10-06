const cidades = [
  {
    id: 1,
    nome: "Ouro Preto",
    imagem: "https://picsum.photos/id/1018/800/600",
    descricao: "A joia do barroco mineiro, com ladeiras de pedra e igrejas históricas."
  },
  {
    id: 2,
    nome: "Belo Horizonte",
    imagem: "https://picsum.photos/id/1015/800/600",
    descricao: "A capital que une a agitação urbana com a tranquilidade da serra."
  },
  {
    id: 3,
    nome: "Tiradentes",
    imagem: "https://picsum.photos/id/1016/800/600",
    descricao: "Uma viagem no tempo, com ruas estreitas e culinária de dar água na boca."
  }
];

// Função para pegar parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Página de detalhes
if (window.location.pathname.includes("detalhes.html")) {
  const id = parseInt(getQueryParam("id"));
  const item = cidades.find(c => c.id === id);

  if (item) {
    document.getElementById("detalhe-item").innerHTML = `
      <div class="col-md-8">
        <div class="card">
          <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
          <div class="card-body">
            <h2 class="card-title">${item.nome}</h2>
            <p class="card-text">${item.descricao}</p>
            <a href="index.html" class="btn btn-primary">Voltar para Home</a>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById("detalhe-item").innerHTML = `
      <p class="text-center text-danger">Item não encontrado.</p>
    `;
  }
}
