$().ready(() => {

    $("#addBtn").on("click", () => {
        add();
    });

});


class Customer {
    id;
    name;
    sales;

    constructor(id = 0, name = "", sales = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log() {
        console.log(this.id, this.name, this.sales);
    }
}

let customers = [
    new Customer(1, "MAX", 1000),
    new Customer(2, "PG", 100000),
    new Customer(3, "MAX", 50000),
    new Customer(4, "TEST")
]

const loaded = () => {
    display(customers);
}

const display = (custs) => {
    let tbody = document.getElementById("tbody");
    let formatter = new Intl.NumberFormat('en-us', {
        style: 'currency', currency: 'USD'
    });
    tbody.innerHTML = "";
    for(let cust of custs) {
        
        let tr = "<tr>";
        tr += `<td>${cust.id}</td>`;
        tr += `<td>${cust.name}</td>`;
        tr += `<td>${formatter.format(cust.sales)}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let inpIdCtrl = document.getElementById("pId");
    let inpNameCtrl = document.getElementById("pName");
    let inpSalesCtrl = document.getElementById("pSales");
    let cust = new Customer();
    cust.id = +inpIdCtrl.value;
    cust.name = inpNameCtrl.value;
    cust.sales = +inpSalesCtrl.value;
    customers.push(cust);
    display(customers);
}