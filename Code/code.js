function selecionaEmpresa() {
    let empresa = document.getElementById("empresa").value;

    switch (empresa) {
        case "unimed":
            document.getElementById("setorUsm").disabled = false;
            document.getElementById("setorUsm").hidden = false;


            document.getElementById("setorImu").disabled = true;
            document.getElementById("setorImu").hidden = true;
            break;

        case "imune":
            document.getElementById("setorImu").disabled = false;
            document.getElementById("setorImu").hidden = false;


            document.getElementById("setorUsm").disabled = true;
            document.getElementById("setorUsm").hidden = true;


            break;

        default:
            document.getElementById("setorUsm").disabled = true;
            document.getElementById("setorUsm").hidden = true;


            document.getElementById("setorImu").disabled = true;
            document.getElementById("setorImu").hidden = true;
            break;
    }
}


function enviar() {
    var nome = document.getElementById("nome").value;
    var emailReceb = document.getElementById("email").value;
    var empresa = document.getElementById("empresa").value;
    var setorUsm = document.getElementById("setorUsm").value;
    var setorImu = document.getElementById("setorImu").value;
    let setorEmpresa;

    switch (empresa) {
        case "unimed":
            setorEmpresa = setorUsm;
            break;
        case "imune":
            setorEmpresa = setorImu;
            break;
        default:
            setorEmpresa = "Vazio";
            break;
    }

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("empresa").value = "null";
    document.getElementById("setorUsm").value = "Administrativo";
    document.getElementById("setorImu").value = "Administrativo";

    document.getElementById("setorUsm").disabled = true;
    document.getElementById("setorUsm").hidden = true;


    document.getElementById("setorImu").disabled = true;
    document.getElementById("setorImu").hidden = true;
    
    alert("O seu cadastro foi realizado com sucesso, boa sorte com o sorteio");
    window.location.href = "BitDefender/";

    /*Email.send({
        Host: 'smtp.mailendo.com',
        Username: 'cyberusmtst@gmail.com',
        Password: '15b27fc5-e219-4eb7-a561-a8d77a1bade0',
        To: 'cyberusmtst@gmail.com',
        From: "cyberusmtst@gmail.com",
        Subject: "Envio de dados pessoais",
        Body: "Seguem os dados coletados nesta busca:\n" + "Nome: " + nome + "\nE-mail: " + emailReceb + "\nEmpresa: " + empresa + "\nSetor: " + setorEmpresa
    }).then(function(message){
        if(message === "OK"){
            alert("O seu cadastro foi realizado com sucesso, boa sorte com o sorteio");
            window.location.href = "BitDefender/";
        }
        else{
            //alert("Erro no cadastro, realize-o novamente!");
            alert(message);
        }
    } );*/


    //1º - ECCF228E2B779150AAF080BDE356DFDD0AC7
    //1º - 439b4b05-f6c0-45f4-83c7-43e5188179b6

    //2º - B49344436C53768266F62087A2E84B40F22E
    //2º - 15b27fc5-e219-4eb7-a561-a8d77a1bade0
}