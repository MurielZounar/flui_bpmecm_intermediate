function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
    let ds = DatasetBuilder.newDataset();
    ds.addColumn("simbolo");
    ds.addColumn("nomeMoeda");

    ds.addRow(new Array("R$", "BRL"));
    ds.addRow(new Array("U$", "USD"));
    ds.addRow(new Array("$", "ASR"));

    return ds;
}
function onMobileSync(user) {}
