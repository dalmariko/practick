//
// //
// // function sum(a,b) {
// //     if (a === undefined) return console.log('a undefined');
// //     if (b === undefined) return console.log('b undefined');
// //     let c = a+b;
// //    return c;
// // }
// //
// // console.log(sum(1,4));
// // console.log(sum (1));
//
//
// function fullname( ferstName='',lastName='' ){
//       return hello= `Hello ${ferstName} ${lastName}`;
// }
//
//
// let user ={
//     ferstname: 'dima',
//     lasname:'perilman',
//     email:'mail@mail.com',
//     phone_nums: {
//         '1':'123123123',
//         '2':'3123123'
//     }
// };
//
// // greeting = fullname(user.ferstname,user.lasname);
//
// let ferstname = prompt('введите имя');
// let lastname = prompt('введите фамилию');
//
// greeting = fullname(ferstname,lastname);
//
// alert(greeting);




// hight level function callbecs

function highFunc () {
    console.log('highFunc');
    return function () {
        console.log('function 2');
    }
}

// highFunc()();


//CallBeck  называется
function highFunc2 (func) {
    func(22);
}

function callbeck(a) { console.log('CallBeck, '+a); }

// highFunc2(function () { console.log('CallBeck') });
// highFunc2(callbeck);





function processString(string,handler){
    let newStr='';

    for (let i=0; i<string.length; i++){
        let naewChar = handler(string[i]);
    }

    return newStr;
}

function  callBack (symbol) {
    console.log(symbol);
}

processString('hello',callBack);

