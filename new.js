let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
function generate2DArray(str) {
    let ray2D = [];                 //creating a layout for the 2d array.
    let arr1D = stri.split ("\n");  //string will split at \n

    arr1D.forEach(row => {
        ray2D.push(row.split(",")); //a new row would be "pushed" when across ","
    });

    return ray2D; //returning the value back to ray2D
}

const Ray2D = generate2DArray(csv); //callout the generate2DArray
console.log(Ray2D);

function generateObjectArr(ray2D) { //declare the object function
let objectArray = [];
let headers = ray2D[0] //starts at zero

//initializing process

for (i = 1, i < ray2D.length; i++) {
    const obj = ray2D[i].reduce((acc, item, index) => { //starts from 0
        acc[headers[index].toLowerCase()] = item; //the values are in lower case
        return acc; //returns the value back to acc
    }, {});

    objectArray.push(obj); //add in a new object to arrays
}

return objectArray; //returning back to the function

}
const objectArray = generateObjectArr(Ray2D);
console.log(objectArray); //calling out from objectArray

console.log("Removed last element of array:")
objectArray.pop();
console.log(objectArray);


console.log("Insert index 1:")
objectArray.splice (1, 0, { id: "48", name: "Barry", occupation: "Runner", age:"25" }); //the element we are removing
console.log(objectArray);



console.log("Adding object to the end of the array:")
objectArray.push ({ id: "10", name:"Ang", occupation:"Airbender", age: "112"}); //the element we are adding
console.log(objectArray);

function orgAverageAge(arr) {
    let totalAge=0
}