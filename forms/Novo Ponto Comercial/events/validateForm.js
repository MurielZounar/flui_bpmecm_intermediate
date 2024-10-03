function validateForm(form) {
    if (form.getValue("nome") == "") {
        throw "O Nome não foi preenchido.";
    }

    // validar se ao menos um responsável foi adicionado à tabela paixfilho
    let responsaveis = form.getChildrenIndexes("tabResponsaveis");

    if (responsaveis.length == 0) {
        throw "Nenhum responsável foi adicionado.";
    }
}
