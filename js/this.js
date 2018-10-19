/*
// ключевое слово this

function getPrice(){
    console.log(this);
    console.log(this.price);
}

// Методы фвляются функция которая записана в бъект

const carCitroen = {
    name : 'citroen ds3',
    price: '10000$',
    birthYear:'2013',

    // getPrice: function () {
    //     //делаем действия
    // },
    //

    getPrice:getPrice
};



const carBMW = {
    name: 'citroen ds3',
    price: '30000$',
    birthYear: '2013',
    getPrice:getPrice
};


//вызов метода
carCitroen.getPrice();
carBMW.getPrice();
getPrice();

*/





// метод и объекты(они же функции в одном флаконе)

const calc = {
    value:0,
    plus(num = 0){
        this.value +=num;
        //вызов по цепочке
        return this;
    },
    minus(num = 0){
        this.value -=num;
        return this;
    },
    multiply( num = 1){
        this.value *=num;
        return this;
    },
    divite (num = 1 ){
        this.value /=num;
        return this;
    }
};



const calc2 ={
    value:0
};














