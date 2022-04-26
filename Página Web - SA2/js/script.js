$ (document).ready(function(){

    $("#carrosel img:eq(0)").addClass("banner-ativo").show()
  
    setInterval(slide, 3000)
  
    function slide() {
      if ($(".banner-ativo").next().length) {
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
      } else {
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
      }
    }
  
  
  })

let listaProcurados = [
    {
      titulo: "Cadeira gamer",
      valor: "R$2500,00"
    },
    {
      titulo: "Console PS5",
      valor: "R$5000,00"
    },
    {
      titulo: "CPU gamer",
      valor: "R$7200,00"
    },
    {
      titulo: "Mouse gamer",
      valor: "R$1500,00"
    }
  ]
  
  function renderizarProcurados() {
    let espaco = document.getElementById("espaco-procurados")
  
    let template = "";
  
  
  
    for (let index = 0; index < listaProcurados.length; index++) {
      const procurados = listaProcurados[index];
  
      template += `
      <div class="card-procurados"><img src="img/Cadeira.png"><a href="#"> <p>${procurados.titulo}<br>${procurados.valor}</p> </a></div>
      `
  
    }
  
    espaco.innerHTML = template;
  
  }

function MostrarPopup (){
window.alert("Bem-vindo")
}

let busca = document.getElementById("campobusca");

function Realizarbusca(){
    let Produtopesquisado = busca.value
    console.log(Produtopesquisado)
}