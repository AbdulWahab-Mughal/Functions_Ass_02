// // ========Question_n0_1=========

// function closure(num1) {
//     return function (num2) {
//         console.log(num1+num2);

//     }

// }
// let result=closure(5)
// result(105);

// // ========Question_n0_2=========
// let arr = [1 , 4 , 6 , 3 , 56 , 5 , 7 , 9];
// function recursive(array, val) {

//     if (array.length == 0) {
//       return false;
//     }

//     if (array[0] == val) {
//       return true;

//     }
//     return recursive(array.slice(1), val);
//   }
// //   recursive(array,4)
//   console.log(recursive(arr,4)? "true: found in array":"false: not-found in array");

//     // ========Question_n0_3=========

//     function addPara(text) {
//   let newParagraph = document.createElement('p');
//   let textNode = document.createTextNode(text);
//   newParagraph.appendChild(textNode);
//   document.body.appendChild(newParagraph);
// }
// addPara('This is a new paragraph!');

//     // ========Question_n0_4=========

//     function addListItem(text) {
//         let list = document.getElementById('myList');
//         let newListItem = document.createElement('li');
//         let textNode = document.createTextNode(text);
//         newListItem.appendChild(textNode);
//         list.appendChild(newListItem);
//       }
//       addListItem("orange")

// // ========Question_n0_5=========

// let myElement = document.getElementById('Element');
// function changeColor(element, color) {

//     element.style.backgroundColor = color;

//   }
// changeColor(myElement, 'blue');

// // ==========Question_no_6========
// let Obj={
//     name:"A.wahab",
//     age:21
// }
// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   saveToLocalStorage("1st", Obj)

// // ==========Question_no_7========

// function getFromLocalStorage(key) {
//     let objectString = localStorage.getItem(key);
//     return JSON.parse(objectString);
//   }
//   console.log( getFromLocalStorage("1st"));

// // ==========Question_no_8========
// let Objt={
//         name:"A.wahab",
//         age:21
//     }
// function saveProperties(object) {
//     for (let key in object) {
//       localStorage.setItem(key, JSON.stringify(object[key]));
//     }

//     let newObject = {};
//     for (let key in object) {
//       newObject[key] = JSON.parse(localStorage.getItem(key));
//     }

//     return newObject;
//   }
//   saveProperties(Objt)

//=====================Question_no_9_check vowels====

//.split() used for converting string alphabets into array
// filter used to find a particular values in the array
// map used for getting all values from the array
//.includes used to check weather the a element is include or not

// let vow=["a","e","i","o","u"]
// let Cap = "abdulwahab"
// let convert=Cap.split('')
// let Arr=convert.filter((val)=>{
//     return vow.includes(val)

// })
// console.log(Arr);

//=====================Question_no_10_Largest No in the Array====

// let array = [1, 2, 45, 67, 89, 423, 4, 3];
// let Largest = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (Largest < array[i]) {
//     Largest = array[i];
//   }
// }
// console.log("Here The Largest No:", Largest);
//=====================Question_no_11_Smallest No in the Array====

// let arr = [45, 67, 89, 1, 5, 423, 4, 3];
// let Smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (Smallest > arr[i]) {
//     Smallest = arr[i];
//   }
// }
// console.log("Here The Smallest No:", Smallest);
//=====================Question_no_12_2nd Largest No in the Array====

// let arr = [45, 67, 89, 1, 5, 423, 4, 3];
// let Largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (Largest < arr[i]) {
//     Largest = arr[i];
//   }
// }
// console.log("Here The Largest No:", Largest);

// // remove largest no in the array to find 2nd largest
// // let SecondArr=[];
// let RemoveLargest = arr.indexOf(Largest)

// if(RemoveLargest !== -1){
//     arr.splice(RemoveLargest,1)

// }
// let secondLargest = arr[0];
// for (let j = 0; j < arr.length; j++) {
//     if (secondLargest < arr[j]) {
//       secondLargest = arr[j];
//     }
//   }

// console.log("Here is the Second Largest:",secondLargest);

//=====================Question_no_13_Duplicate No in the Array====

function findDuplicates(arr) {
  let counts = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    // If the value is not in the counts object, initialize it with 1
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      // If the value is already in the counts object, increment its count
      counts[value]++;

      // If this is the first time the value has been encountered, add it to the duplicates array
      if (counts[value] === 2) {
        duplicates.push(value);
      }
    }
  }

  return duplicates;
}

let myArray = [1, 2, 3, 4, 2, 5, 6, 4, 7];
let result = findDuplicates(myArray);

console.log("Duplicate values:", result);
