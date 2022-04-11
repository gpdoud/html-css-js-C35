const customers = [
    { id: 1, name: "MAX", active: true, sales: 10000 },
    { id: 2, name: "P&G", active: true, sales: 1000000 },
    { id: 3, name: "Kroger", active: true, sales: 500000 },
    { id: 4, name: "Target", active: false, sales: 300000 }
]

const loaded = () => {
    display(customers);
}

const display = (custs) => {
    const tbodyCtrl = document.getElementById("custs");
    for(let cust of custs) {
        let tr = "<tr>";
        tr += `<td>${cust.id}</td>`;
        tr += `<td>${cust.name}</td>`;
        tr += `<td>${(cust.active ? "Yes" : "No")}</td>`;
        tr += `<td>${cust.sales}</td>`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}