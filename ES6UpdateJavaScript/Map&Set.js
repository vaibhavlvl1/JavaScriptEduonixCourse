// creating Map

const mapData = new Map([[10, 'Ten'], ["isMarried", false]]);

// adding data

mapData.set("name", "john");
mapData.set(true, "yes");

console.log(mapData)
// get data

console.log(mapData.get("name"));

// check if key present
console.log(mapData.has("name"))

// size
console.log(mapData.size)

// delete
mapData.delete(10)

console.log(mapData);

// clear all map

// mapData.clear()

// we can use for each method with map

mapData.forEach((value, key) => {
    console.log(value, key)
})

console.log("----------------------------------------------------")

// for of

for (var key of mapData.keys()) {
    console.log(key)
}
console.log("---------------------------------------------------")


for (let arr of mapData.entries()) {
    console.log(arr)
}

console.log("---------------------------------------------------")

for (let [key, value] of mapData.entries()) {
    console.log(key, value);
}
console.log("---------------------------------------------------")





/******************** sets *******************************/
// stores unique values

// create set 

const setData = new Set(['john', 10, false, { first: "Bob", last: "Brown" }]);

console.log(setData)

// add items

setData.add("Nick")


console.log(setData)