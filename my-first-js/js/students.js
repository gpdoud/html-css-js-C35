const students = [
    { id: 1, name: "Alice", major: "Education", sat: 1350, gpa: 3.5 },
    { id: 2, name: "Bill", major: "Business", sat: 1140, gpa: 2.6 },
    { id: 3, name: "Chris", major: "Management", sat: 1310, gpa: 3.3 },
    { id: 4, name: "David", major: "Marketing", sat: 1260, gpa: 3.1 },
    { id: 5, name: "Ellen", major: "Engineering", sat: 1410, gpa: 3.8 }
];

const go = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let s of students) {
        let row = "<tr>";
        row += `<td>${s.id}</td>`;
        row += `<td>${s.name}</td>`;
        row += `<td>${s.major}</td>`;
        row += `<td>${s.sat}</td>`;
        row += `<td>${s.gpa}</td>`;
        row += "</tr>";
        tbody.innerHTML += row;
    }
}