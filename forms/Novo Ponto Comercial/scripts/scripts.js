let calendarioDtNasc = FLUIGC.calendar("#dtNasc");
const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

cep.addEventListener("blur", () => {
    let textoCep = cep.value;
    textoCep = textoCep.replace(/[.]/g, "");
    textoCep = textoCep.replace(/[-]/g, "");

    $.getJSON(`//viacep.com.br/ws/${textoCep}/json/`, (dados) => {
        logradouro.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        uf.value = dados.estado;
    });
});
