// =====Print 1-10 with for loop=====
for (let number = 1; number <= 10; number++) {
  document.write(number + " ");
}

document.write("<br/>");

// =====Print 1-10 with while loop=====
let newNumber = 10;
while (newNumber >= 0) {
  document.write(newNumber + " ");
  newNumber--;
}
document.write("<br/>");

//====== for of loop=========
const array = ["apple", "lemon", "banana", "orange"];
for (let fruit of array) {
  document.write(fruit + " ");
}
document.write("<br/>");
// ====for in loop
for (let key in array) {
  document.write(key, " ", array[key], " ");
}

// ==== array declaration======
const array = ["first", "second", "third", "fourth"];
// ====accessing array element===
document.write(array.length, "<br/> ");
document.write(array[0], " ");
document.write(array[1]);
document.write("<br/>");

// === array methods==========
// adding into array
array.push("fifth"); //fifth will be added as the last element
array.unshift("zero"); // zero will be added as the first element.

// deleting from array
array.pop(); //last element of the array will be removed
array.shift(); //first element of the array will be removed

// sorting an array
array.sort();
document.write(array);

// ==================
