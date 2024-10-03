function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    var anexos = hAPI.listAttachments();
    var temAnexo = false;

    for (i = 0; i < anexos.size(); i++) {
        var anexo = anexos.get(i);

        if (anexo.getDocumentDescription() == "proposta_comercial.pdf") {
            temAnexo = true;
        }
    }

    if (!temAnexo) {
        throw "A proposta comercial não foi anexada";
    }
}
