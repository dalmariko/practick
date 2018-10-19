//Promise

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';

// const http = new Http();
//
// http.get(url1,(res)=>{
//     console.log(res);
//     const id = res.id;
//
//     http.get(url2,(res)=>{
//         console.log(res);
//         //Выводим коментарий и сам пост
//     })
// });


// Создание промиса

/*
const promis = new Promise((resolve, reject) => {

    console.log('вычисляю чсло');

    setTimeout(() => {
        const randomValue = Math.ceil(Math.random() * 10);
        if (randomValue > 5) {
            resolve(randomValue)
        }
        else {
            reject('число меньше 5 поэтому вызыван reject')
        }
    }, 3000);

});
*/


// console.log(promis);

/*
promis
    .then((resolve_value) => {
        console.log(resolve_value);
        setTimeout(()=>{console.log('timeout')},3000);
        return resolve_value * 10;
    })
    .then((prev_resolt) => {
        console.log('еще что то делаем ' + prev_resolt );
    })
    .catch((reject_value) => {
        console.log(reject_value);
    });
*/


/*
promis
    .then((resolve_value) => {
        console.log(resolve_value);
        setTimeout(()=>{console.log('timeout')},3000);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('timeout2');
                resolve();
            },2000)
        });
    })
    .then((prev_resolt) => {
        console.log('еще что то делаем ' + prev_resolt );
    })
    .catch((reject_value) => {
        console.log(reject_value);
    });

*/

function promis1(value) {
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log('promis_1');
    resolve (value);
},2000);
    });
}

function promis2(value) {
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log('promis_2');
    resolve (value);
},10000);
    });
}


// promis1('мое значение')
// .then((data)=>{
//    console.log(data);
// });
//
// promis1('мое значение')
// .then(promis2)
//     .then((data)=>{
//       console.log(data);
// });
//

Promise.all([
    promis1('value1'),
    promis2('value2')
])
.then(([value1,value2])=>{
    console.log(value1,value2);
})
.catch((err)=>{console.log(err)});



/*

const promise_http=new PromiseHttp();
promise_http.get(url1)
    .then(res => {
        console.log(res);
    //    действия с ответом
    })
    .then( res2 => {
        promise_http.get(url2);
        // console.log(res2);
    //действия со вторым ответом
    })
    .catch(err => console.log(err));

// второй вариант когда всесразу
Promis.all([
    promise_http.get(url1),
    promise_http.get(url2)
])
.then(([post,comments])=>{
    console.log(post);
    console.log(comments);
//Действия с двумя ответами
})
    .catch(err => console.log(err));
*/


/*

fetch(url1)
    .then((response)=>{
        console.log(response.status);
        console.log(response.headers.get('content-type'));
        console.log(response.json());//возвращается промис
        return response.json();//возвращает результат первого зена и потом может принять этот результат в следующий зен
})
    .then((reponse_body)=>console.log(reponse_body));


*/


/*

const fetch_http = new FetchHttp();
fetch_http.get(url1)
    .then(res => console.log(res));

*/
