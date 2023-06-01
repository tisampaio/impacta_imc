function Calcular() {
    var peso = $("#txtPeso").val();
    var altura = $("#txtAltura").val();

    if (peso == "" || altura == "") {
        $("#divErro").removeClass("invisible");
    }
    else {
        $("#divErro").addClass("invisible");
        var imc = CalcularIMC(peso, altura);
        var texto = BuscarTexto(imc);
        var classe = BuscarClasse(imc);
        RemoverClassesResultado();
        $("#resTexto").text(texto);
        $("#resTexto").addClass(classe);
        $("#resImc").text(" (" + imc + " Kg/m²)");
    }
}

function RemoverClassesResultado(){
    $("#resTexto").removeClass("text-success");
    $("#resTexto").removeClass("text-warning");
    $("#resTexto").removeClass("text-danger");
}

function BuscarClasse(imc){
    var classe;
    
    if (imc < 18.5)
        classe = "text-warning";
    else if (imc <= 24.9)
        classe = "text-success";
    else if (imc <= 30)
        classe = "text-warning";
    else
        classe = "text-danger";
    
    return classe;
}

function BuscarTexto(imc) {
    var texto;
    
    if (imc < 18.5)
        texto = "Magreza";
    else if (imc <= 24.9)
        texto = "Normal";
    else if (imc <= 30)
        texto = "Sobrepeso";
    else
        texto = "Obesidade";
    
    return texto;
}

function CalcularIMC(peso, altura) {
    var imc = peso / altura**2;
    imc = Math.round(imc * 10)/10;

    return imc;
}