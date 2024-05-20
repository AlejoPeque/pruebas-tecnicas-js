// 01. Crear un Objeto que diga "Hello" y un metodo que escriba por consola "Hello <name>"
console.log("====================================");
console.log("1. Crear un Objeto:");

const method = {
  name: "Alejo",
  hello: function () {
    return `Hello ${this.name}`;
  },
};

console.log(method.hello());
method.name = "Juan";
console.log(method.hello());

console.log("====================================");

// 02. El nombre no puede ser modificado
console.log("2. El nombre no puede ser modificado:");
console.log('Alejoooooo');
console.log('Alejoooooo');


// Opción 1
Object.defineProperty(method, "name", {
  writable: false,
});

// Opción 2
Object.freeze(method);

// Muestra
method.name = "Pedro";
console.log(method.hello());

console.log("====================================");

// 03. Que muestre las 3 ciudades que mas se repiten en el siguiente arreglo, de manera descendente

console.log("3. Ciudades que mas se repiten en el arreglo:");

const citiesList = [
  "Barcelona",
  "Madrid",
  "Londres",
  "Dublin",
  "Barcelona",
  "Tokyo",
  "Madrid",
  "Barcelona",
  "Buenos Aires",
  "Madrid",
  "Barcelona",
  "Madrid",
  "Buenos Aires",
  "Madrid",
  "Londres",
  "Madrid",
  "Dublin",
  "Barcelona",
  "Tokyo",
  "Madrid",
  "Barcelona",
  "Buenos Aires",
  "Dublin",
  "Buenos Aires",
  "Lima",
];

function logMostOcurrCities(numCities) {
  const cities = {};
  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });
  return Object.keys(cities)
    .map(city => ({ name: city, times: cities[city] }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map(city => city.name);
}

console.log(logMostOcurrCities(4));
console.log("====================================");
