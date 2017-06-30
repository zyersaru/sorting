var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var name = students.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return - 1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    if (a.age > b.age) {
      return - 1;
    } else {
      return 1;
    }
    return 0;
  }
});

console.log(name);