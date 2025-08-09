let items = [];
function create(I) {
  items.push(I);
  console.log(`Item "${I}" added successfully.`);
}

function read() {
    items.forEach((item) => {
      console.log(` ${item}`);
    })
}

function update(index, updatedItem) {
    items[index] = updatedItem;
}

function deleteItem(index) {
  
    items.splice(index);
 
}
