// let x;
// x += 10;
// x /= 10;
// x *= 10;
// x -= 10;


// var user = {
//     name:'dima',
//     email:'test@test.com',
//     age:29
// };

// let userName = user.name || ' defalt nameUser';
// let userEmail= user.email || 'pleas enter email';

// var isValid =  user.age >= 18 &&  user.age <= 30 ;


// // console.log(isValid);


// let arr = [1,2,3];

// if (!arr.length){
//     console.log(arr);
// }else{
//     console.log('шалом');
// }

//
// let displey = 'hidden';
//
// if (displey === 'hidden'){
// 	display = 'visibl';
// }else {
// 	display = 'hidden';
// }
//
// let x = 1;
//
// if(x === 0){
// 	x = 1;
// }else if (x < 0) {
// 	x='less then zerro';
// }else if (x > 0) {
// 	x *= 10;
// }
//
//
// x=x===0 ? 1 :
// 		x<0 ? x = 'less then zerro' :
// 			   x>0
// 				 x *= 10;

//
// let boy = {
//     name: 'Dima',
//     age: '18',
//     'kan drink': false
// }
//
// let alcohol = {
//     name: 'wiskey',
//     oz: 7,
// }
//
// if (boy['age'] >= 21) {
//     console.log(`${boy.name} kan drink`);
//     boy['kan drink'] = true;
// } else if (boy['age'] >= 18 && boy['age'] < 21 && alcohol['oz'] <= 7) {
//     console.log(`your kan drink ${boy.name} so smal alcohol oz`);
// } else {
//     console.log(`your kent drink ${boy.name}`);
//     boy['kan drink'] = false;
// }
//

//
// let user = {
//     'niknName': 'dmgame',
//     'type': 'user'
// }
//
// switch (user['type']) {
//     case 'user':
//         console.log('hello User');
//         break;
//
//     case 'manager':
//         console.log('hello manager');
//         break;
//
//     case 'admin':
//         console.log('hello admin');
//         break;
// }
//




// условие
// итератор i
// увеличение  i++

// while(){}
//do while
//for

//for in --- перебор объектов
//for of

// let i=0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }



// let i=10;

// while(i--) {
// while(i-- > 0) {
// while(++i > 0) {
// while(i++ > 0) {
//     console.log(i);
// }

// let str = 'hello';
// let i = 0;
// let res = '';

// while (i < str.length) {
    // res += '*' + str[i];
    // if (i === str.length - 1) {
    //     res += '*';
    // }

    // res += i === 0 ? `*${str[i]}*`:`${str[i]}*`;
    // i++;
// }

// console.log(res);

//
// let arr = ['one','two', 'tre'];
//
// arr.pop(); -//удаление последнего єлемента
// arr.shift(); - // удаление первого элемента
// arr.unshift('onne'); - // добавлеие первого элемента
// arr.push('four'); - // добавление последнего элемента
// console.log(arr);

//
// for (let i = 0; i <= 10; i ++ ){
//     console.log(i);
// }

// for(let i =10; i--;){
// console.log(i);
// }

// let i =10;
//
// for (; i--;){
//     console.log(i);
// }

// for (let i = 0; i<10; i++){
//     if (i===5){
//         continue;
//         // break;
//     }
//     console.log(i);
// }

// let users = [
//     {
//         name: 'Dima',
//         gender: 'male'
//     },
//     {
//         name: 'Den',
//         gender: 'female'
//     },
//     {
//         name: 'ola',
//         gender: 'female'
//     },
//     {
//         name: 'oleg',
//         gender: 'male'
//     }
// ];

// let male = 0;
// let female = 0;
//
// for (let i = 0; i < users.length; i++) {
//     if (users[i]['gender'] === 'male') {
//         male++;
//     } else if (users[i]['gender'] === 'female') {
//         female++;
//     }
// }
// console.log(`male->${male}`, `femail->${female}`);
//

// for (let i = 0; i < users.length; i++) {
//
//
//     for (let x = 0; x < users[i]['name'].length; x++) {
//         var  newName;
//
//         newName += users[i]['name'][x];
//
//         if ( x === 0 ){
//             newName = users[i]['name'][x].toUpperCase();
//         }
//     }
//
//     users[i]['name']=newName;
//
// }
// console.log(users);


// for (let i = 0; i < users.length; i++) {
//
//         users[i]['name'] = users[i]['name'][0].toUpperCase();
//         users[i]['name'] += users[i]['name'];
//
// }
// console.log(users);



// for (let i=0; i<users.length; i++){
//     users[i]['is admin'] =  false;
// }
// console.log(users);


