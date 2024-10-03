function resolve(process, colleague) {
    let userList = new java.util.ArrayList();
    let pais = `Aprovadores${hAPI.getCardValue("pais")}`;

    userList.add(`Group:${pais}`);

    return userList;
}
