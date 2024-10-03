function createDataset(fields, constraints, sortFields) {
    let ds = DatasetBuilder.newDataset();
    ds.addColumn("login");
    ds.addColumn("nome");

    let filtroGrupo = DatasetFactory.createConstraint(
        "colleagueGroupPK.groupId",
        "Responsaveis",
        "Responsaveis",
        ConstraintType.MUST
    );

    let datasetGrupo = DatasetFactory.getDataset(
        "colleagueGroup",
        null,
        new Array(filtroGrupo),
        null
    );

    for (let i = 0; i < datasetGrupo.rowsCount; i++) {
        let userIdGrupo = datasetGrupo.getValue(
            i,
            "colleagueGroupPK.colleagueId"
        );

        let datasetColleague = DatasetFactory.getDataset(
            "colleague",
            null,
            null,
            null
        );

        for (let j = 0; j < datasetColleague.rowsCount; j++) {
            let userId = datasetColleague.getValue(
                j,
                "colleaguePK.colleagueId"
            );
            let userNome = datasetColleague.getValue(j, "colleagueName");

            if (userId == userIdGrupo) {
                ds.addRow(new Array(userId, userNome));
            }
        }
    }

    return ds;
}
