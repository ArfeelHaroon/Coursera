// function chagePrimtive(primValue){
//     console.log("'in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// chagePrimtive(value); //primValue = value
// console.log("after changeprimitive, orig value:");
// console.log(value);



function chagePrimtive(objValue){
    console.log("'in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

var value = {x: 7};
chagePrimtive(value); //objValue = value
console.log("after changeprimitive, orig value:");
console.log(value)
