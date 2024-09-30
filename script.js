function insert_Row() {
    //Write your code here
let insert = document.getElementById("button");
let table = document.getElementById("sampleTable");
	let row = document.createElement("tr");
	let td1 = document.createElement("td");
	td1.innerText = "New Cell1";
	let td2 = document.createElement("td");
	td2.innerText = "New Cell2";
	row.appendChild(td1);
	row.appendChild(td2);
	table.appendChild(row);
}
