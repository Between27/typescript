let tabTest = [1, 2, 3, 4, 5];

for (let i = 0; i < tabTest.length; i++) {
  if (tabTest[i] == 2) tabTest.splice(i, 2);
}

console.log(tabTest);
