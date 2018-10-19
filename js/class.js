// замыкание это обращение на уровень выше с помощью лексического окружения


let value = 'som text';

// LE0 = {
//     value :'som text',
//     makeCounter: function makeCounter() {}
//     scope: null
// };


function makeCounter() {

    // LEmakeCounter = {
    //     arguments: [],
    //     counter: 0,
    //     scope: LE0
    // };

    let counter = 0 ;
    return function () {
        return ++counter;
    }
}

const counterInstance1 = makeCounter();
const counterInstance2 = makeCounter();

// console.log(counterInstance1());
// console.log(counterInstance2());




//с помощью замыкания ограничили доступ к переменной result

const calcModule = (function () {
    let result = 0;

    function plus(num1=0,num2=0) {
        return result += num1+num2;
    }

    function minus(num1=0,num2=0) {
        return result -= num1-num2;
    }

    function getResult() {
        return result;
    }

    function reset() {
        return result = 0;
    }

return {
        plus,minus,getResult,reset
}

})();

// console.log(calcModule);
// console.log(calcModule.plus(2,5));



//Конструкторы

function Laptop(brand,model,price,descriprion) {
    let obj = {};
    obj.brand = brand;
    obj.model = model;
    obj.price = price;
    obj.description = descriprion;

    return obj;
}

const apleLaptop = Laptop('Apple','MackBook PRO 13',1000,{cpu:'intel core I5',ram: '8GB'} );

// console.log(apleLaptop);


function Laptop2(brand,model,price,descriprion) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.description = descriprion;

    this.getDescription = function (prop){
        return prop ? this.description[prop] : this.description;
    }
}

const lenovo = new Laptop2('lenovo','ideapart',500,{cpu:'intel core I3',ram: '2GB'} );

// console.log(lenovo);
// console.log(lenovo.getDescription('cpu'));
















