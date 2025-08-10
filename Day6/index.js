let items = JSON.parse(localStorage.getItem("items") || "[]");
let editIndex = null;
function save() {
  localStorage.setItem("items", JSON.stringify(items));
}
function render() {
  let searchVal = document.getElementById("search").value.toLowerCase();
  let html = "";

  items
    .filter((item) => item.name.toLowerCase().includes(searchVal))
    .forEach((item, i) => {
      html += `
        <tr>
          <td>${item.name}</td>
          <td>${item.desc}</td>
          <td>${item.cat}</td>
          <td>
            <button class="edit-btn" onclick="startEdit(${i})">Edit</button>
            <button class="delete-btn" onclick="delItem(${i})">Delete</button>
          </td>
        </tr>
      `;
    });

  document.getElementById("list").innerHTML = html;
}

function addItem() {
  let nameVal = document.getElementById("name").value;
  let descVal = document.getElementById("desc").value;
  let catVal = document.getElementById("cat").value;
  items.push({ name: nameVal, desc: descVal, cat: catVal });
  save();
  render();
  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
}

function delItem(i) {
  items.splice(i, 1);
  save();
  render();
}
function clearAll() {
  items = [];
  save();
  render();
}
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("cat").value = "Mobile";
}
function startEdit(i) {
  document.getElementById("name").value = items[i].name;
  document.getElementById("desc").value = items[i].desc;
  document.getElementById("cat").value = items[i].cat;
  editIndex = i;
  document.getElementById("mainBtn").innerText = "Update";
  document.getElementById("mainBtn").onclick = updateItem;
}
function updateItem() {
  let nameVal = document.getElementById("name").value.trim();
  let descVal = document.getElementById("desc").value.trim();
  let catVal = document.getElementById("cat").value;

  items[editIndex] = { name: nameVal, desc: descVal, cat: catVal };
  editIndex = null;
  save();
  render();
  clearInputs();

  document.getElementById("mainBtn").innerText = "Add";
  document.getElementById("mainBtn").onclick = addItem;
}
render();
