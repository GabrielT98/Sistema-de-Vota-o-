var total_voto = 0
nulov = 0
brancov = 0
function votando() {

    var valor1 = parseInt(document.getElementById("voto").value);
    var candidato = valor1

    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
        total_voto++;
        
    } 
    else {
        sessionStorage.setItem(candidato, 1);
        total_voto++;
    }
    document.getElementById("voto").value = "";
}

function resultado() {
    document.getElementById("resultado").innerHTML=""
    
    for(i=1;i<5;i++){
        if (sessionStorage.getItem(i) !== null) {

            document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
        }
        if (sessionStorage.getItem(i) == null) {

            document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem 0 votos<br/>";
        }
    }
    for(i=5;i<7;i++){
        if(i ==5 &&sessionStorage.getItem(i) !== null){
            document.getElementById("resultado").innerHTML += "Votos Nulos = "+sessionStorage.getItem(i)+"<br/>";
            nulov= sessionStorage.getItem(i)
        }
        if(i ==6 &&sessionStorage.getItem(i) !== null){
            document.getElementById("resultado").innerHTML += "Votos Em Branco = "+sessionStorage.getItem(i)+"<br/>";
            brancov= sessionStorage.getItem(i)
        }
        if (i==5 &&sessionStorage.getItem(i) == null) {
            document.getElementById("resultado").innerHTML += "Votos Nulos = 0 votos<br/>";
            nulov= sessionStorage.getItem(i)
        }
        if (i == 6 && sessionStorage.getItem(i) == null) {
            document.getElementById("resultado").innerHTML += "Votos Em Branco = 0 votos<br/>";
            brancov= sessionStorage.getItem(i)
        }
    }
    document.getElementById("total").innerHTML = "O Total de votos é " + total_voto;
    document.getElementById("total1").innerHTML = "O percentual de votos brancos e nulos é de " + (((nulov+brancov)/total_voto)*100)+"%";

}

