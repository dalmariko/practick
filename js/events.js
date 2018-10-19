
/*
 * Теория: События.
 *
 * Событие - поришествие которое проихошлов брауере.
 *
 * Обработчик события - функця которая запускается после того как произошло событие.
 *
 * Способы отслеживания событий:
 *
 * 1. <button onclick='yourfunction()'></button> Плохой способ.
 *
 * 2. btn.onclick=function(){som code}  Работает но нельзя повесить много событий, на кнопку.
 *
 * 3. btn.addEventListener('событие без приставки он', handler-обработчик);
 *
 *
 *Все обработчиики принимают объект событие.
 * */






const testEventBtn = document.querySelector('.test-event');
const card = document.querySelector('.card');


/*
 function testEvent(e){
 e.preventDefault(); //остановка стандартных действий. Для отладки используют часто.
 // e.stopPropagation(); остановка всплытия.
 console.log('btn');
 }
 */

function testEvenCard(e) {
    console.log('card');
}


// function testEvenBody(e) {
//     console.log('body');
// }


/*Всплытие и перехват события
 *
 */

//Ловим Всплытие
// testEventBtn.addEventListener('click',testEvent);
// card.addEventListener('click',testEvenCard);
// document.body.addEventListener('click',testEvenBody);

//Ловим погружение
// testEventBtn.addEventListener('click',testEvent,true);
// card.addEventListener('click',testEvenCard,true);
// document.body.addEventListener('click',testEvenBody,true);
//




/*
 * Делегирование Обработка событий
 * */

function testEvenCard(e) {
    e.preventDefault();
    // if(e.target.tagname='button'){
    //     console.log('card');
    // }
    if(e.target.classList.contains('test-event')){
        console.log('click');
    }
}


card.addEventListener('click',testEvenCard);



