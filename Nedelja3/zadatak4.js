function lifeSupply (numPerMonth, age) {
let pizzaPerYear=numPerMonth*12;
let doStote=100-age;
return doStote*pizzaPerYear
}lifeSupply (3,25)
console.log (`Potrebna kolicina pice je ${lifeSupply(3,25)}`)