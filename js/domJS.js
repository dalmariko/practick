// 1. начинаются со слова  get
// getElementByTagname('bvz ntuf');
//getElementById('id_name')
//getElementsByClassName('class name')

//все эти методы возвращают живую коллекцию.

//2. query
// querySelector('css_selector');
// querySelectorAll('css_selector'); - возвращает снимок узлов(неживая коллекция)


// const p = document.getElementsByTagName('p');

// const p = document.querySelector('p');
// const p = document.querySelectorAll('p');
// const h2 = document.getElementById('h2');
// const prevH2ElemenSibling = h2.previousElementSibling;
// const nextH2ElemenSibling = h2.nextElementSibling;

// console.dir(prevH2ElemenSibling);
// console.dir(nextH2ElemenSibling);
// console.log(p);

/*
*Получение дочерних элементов
*
*
* */

// const bodyChildren=document.body.children;

// console.dir(bodyChildren);

// const ulChilbren=document.querySelector('ul').children;

// const ulChilbren = document.querySelectorAll('.sub-list li');

// console.dir(ulChilbren);

//
// const ferstBodyChild = document.body.firstElementChild;
// const lastBodyChild = document.body.lastElementChild;
//
//
// console.dir(ferstBodyChild);
// console.dir(lastBodyChild);
//


//Другие коллекции



// const links = document.links;
// console.dir(links);

//
// const forms= document.forms;
// const myForm2  = document.forms['nextForm'];
//
// const myformTextArea=myForm2.elements['massage'];
//
// console.dir(myformTextArea);
// console.dir(myForm2);
// console.dir(forms);





//Перебор элементов коллекции Поиск родителя
//Соответствие селектора


//
// const sublistLinks=document.querySelectorAll('.sub-list a');
//
// for(let element of sublistLinks){
//     // console.dir(element);
//     // console.dir(element.matches('ul li a'));
//     // console.dir(element.matches('.myclass'));
//
//     if (element.matches('.myclass')){
//         // console.log(element);
//     }
// }
//
//
// for(let element of sublistLinks) {
// // console.dir(element.parentElement)
// console.log(element.closest('ul'));
//
// }
//
//
//


/*
*Из коллекции массив
*
* */


let listItems=document.querySelectorAll('ul li');
    listItems=Array.prototype.slice.call(listItems); //делает массив из коллекции.

// console.log(listItems);


let [...allListelements] = document.querySelectorAll('ul li');

console.log(allListelements);

let [...all]=document.querySelectorAll('body');
console.log(all);




