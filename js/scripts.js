// plik scripts.js

var a = 5,
    b = 4,
    value = (a * b) + (2 * a * b) - (b * b);

alert('Wynik formuly wynosi, ' + value);
console.log("Wynik formuły (a*a) + (2 * a * b) - (b*b) jest rowny: " + value);

// w zadaniu nie sugeruja nic na switcha, krotko
if (value > 0) {
    console.log("Wynik formuly jest dodatni");
} else if (value < 0) {
    console.log("Wynik formuly jest ujemny");
} else {
    console.log("Wynik to 0");
}

//juz niby mam z tym zerem powyzej, ale wyczuwam ze w zadaniu chca jeszcze skrotowo

var isItNull = value = 0 ? "Wynik to 0" : "wynik jest inny od 0";
console.log(isItNull);