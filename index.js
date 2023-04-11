// ========Question_n0_1=========

function closure(num1) {
    return function (num2) {
        console.log(num1+num2);
        
    }
    
}
let result=closure(5)
result(105);

// ========Question_n0_2=========
let arr = [1 , 4 , 6 , 3 , 56 , 5 , 7 , 9];
function recursive(array, val) {
    
    if (array.length == 0) {
      return false;
    }
    
    if (array[0] == val) {
      return true;
      
    }
    return recursive(array.slice(1), val);
  }
//   recursive(array,4)
  console.log(recursive(arr,4)? "true: found in array":"false: not-found in array");

    // ========Question_n0_3=========

    function addPara(text) {
  let newParagraph = document.createElement('p');
  let textNode = document.createTextNode(text);
  newParagraph.appendChild(textNode);
  document.body.appendChild(newParagraph);
}
addPara('This is a new paragraph!');



    // ========Question_n0_4=========

    function addListItem(text) {
        let list = document.getElementById('myList');
        let newListItem = document.createElement('li');
        let textNode = document.createTextNode(text);
        newListItem.appendChild(textNode);
        list.appendChild(newListItem);
      }
      addListItem("orange")
      

// ========Question_n0_5=========

let myElement = document.getElementById('Element');
function changeColor(element, color) {
    
    element.style.backgroundColor = color;
    
  }
changeColor(myElement, 'blue');


// ==========Question_no_6========
let Obj={
    name:"A.wahab",
    age:21
}
function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  saveToLocalStorage("1st", Obj)

// ==========Question_no_7========

function getFromLocalStorage(key) {
    let objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }
  console.log( getFromLocalStorage("1st"));
  

// ==========Question_no_8========
let Objt={
        name:"A.wahab",
        age:21
    }
function saveProperties(object) {
    for (let key in object) {
      localStorage.setItem(key, JSON.stringify(object[key]));
    }
    
    let newObject = {};
    for (let key in object) {
      newObject[key] = JSON.parse(localStorage.getItem(key));
    }
    
    return newObject;
  }
  saveProperties(Objt)