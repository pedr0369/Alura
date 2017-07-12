var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(tdPeso.textContent);
    var alturaValida = validaAltura(tdAltura.textContent);

    if(!pesoValido){        
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
       var imc = calculaImc(peso, altura);
        tdImc.textContent = calculaImc(tdPeso.textContent, tdAltura.textContent); 
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000) return true;
    else return false;
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0) return true;     else return false;
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);    
    return imc.toFixed(2);
}