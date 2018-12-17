
//Деструктуризация


let namesArr=['Denis','ivan','eugen'];

// let ivan=namesArr[1];

let [denis, ivan,eugen]=namesArr;
let [, ,c]=namesArr;

console.log(denis,ivan,eugen);


//спред это три точки

// let [ferst,...others]=namesArr;

// рест но тот же спрежж в функции

function restArg(...allArguments) {
    console.log(allArguments);

    //вывалит массив аргументов
}

restArg(1,23,4,3);



let user={
 name:'dima',
 age:33,
 last_name:'Belo',
 balance:1000,
 info:{
  city:'kharkov',
     worck:'EasyCod'
 },
 skils:['html','css']
};
//имядолжно быть как ключь в объекте.
// let {name: n}=user;
// let {name}=user;
// let { balance:b=0,last_name: lastName}=user;
// console.log(name);
// console.log(n);
// console.log(lastName);
// let { balance:b=0,last_name: lastName}=user;
let { balance:b=0,...others}=user;
console.log(b,others);


// let {last_name: lastName}=user;

//
// function desExample({name,age}){
//  console.log(name,age);
// }
// desExample(user);


// Диструктуризация вложеннх объектов

let {info:{city,work},skils:[skil1,skil2] }=user;

console.log(city,work,skil1,skil2);



//методы перебора массивов

// forEach,filter,every,some,map,reduce  методы перебора
//sort -метод сортировки

let ArrayNumb=[12,23,43];
ArrayNumb.forEach(function (el,index,arr) {
    console.log(el,index,arr);
});


let filteredArray=ArrayNumb.filter((el,index,arr)=>{
 return el<=30;
});
console.log(filteredArray);



let mapArr=ArrayNumb.map(el=>el*10);
console.log(mapArr);



let sumofNums=ArrayNumb.reduce((prev,curent)=>{
 console.log(prev,curent);
 return prev;
},0);



