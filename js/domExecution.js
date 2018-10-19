let h1 = document.querySelector('h1');

let link = document.querySelector('a');


h1.innerHTML = '<a href="https://easycode.school">easycode</a>'; 

console.dir(h1.innerHTML);

console.dir(h1.innerText);

h1.innerHTML=''; //clean h1 teg

//h1.innerHTML;
//h1.innerText;
//h1.className;
//h1.id;
//link.href;
//img.src;
//img.alt;


/**
*contains('nameclass');
*add/remove ('nameclass');
*toggle ('add class or remove') 
*
*/



console.log();

let h2 = document.getElementById('h2');
h2.classList.contains('hidden');
h2.classList.add('hidden');
h2.classList.remove('hidden');
h2.classList.toggle('hidden');



/*
* for worck atributes
*-getAttribute('href'); -return var atribute 
*setAttribute('href','http://new.site'); rerayt atribute
*hasAttribute('href'); true  or false if atribute have
*removeAttribute('href');
*
*/


link.hasAtribute('href'); //true

link.setAtribute('target','_blank');

link.getAtribute('target');

link.removeAtribute('target');

link.atributes;//all atributes  view;



/*
* your self costum atribute 
*data-'and name your atribute';
*
*dataset 
*
*
*
*
*/


link.dataset.target='som_target'; //add atribute
link.dataset; // all atributes like obeckt;





/*
*'elements'.contains(node) - have or not elements node
*
*/


const ul = document.querySelector('ul');
const li = document.querySelector('li');

ul.contains('li'); //error
ul.contains(li); // good, but tist is must by object;




/*
* Add, remove, addMany elements and make 
*
*document.createElement('tag_name')- make element like tag_name 
*
*
*
*/

const container = document.querySelector('.container');
const div = document.createElement('div');  //greate only JS
const h3 = container.querySelector('h3');//method use in container;

div.innerHTML='asdfasdf';

div.classList.add('my class1','my_class2');


/*add, remove,  in page html, menthods*/




container.appendChild(div); //add in finish parent element ? my element div

container.insertBefore(div,h3);//before element h3 add som div))


//div.remove();

//container.removeChild(h3);

//container.replaceChild(div,h3);




//universal methods


container.insertAdjacentElement('beforebegin',div);


container.insertAdjacentHTML('afterbegin','<h1> some titleeeeee </h1>');







