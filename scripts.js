let chave = "8a1a5f9603020dc502f1979a3efab4c0"


function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura-max").innerHTML = "Max " + Math.floor( dados.main.temp_max) + "°C"
    document.querySelector(".temperatura-min").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description 
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + " %"

}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
         "&appid=" + chave + 
         "&lang=pt_br" + 
         "&units=metric")
        .then(resposta => resposta.json())

        colocarNaTela(dados)

}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}