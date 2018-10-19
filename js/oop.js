function User(name,age) {
    this.name=name;
    this.age=age;

    this.greeting= function () {
        return`hello ${this.name}`;
    }
}

function Admin(name,age,isAdmin) {


    this.name=name;
    this.age=age;
    this.isAdmin=isAdmin;

    this.greeting= function () {
        return`hello ${this.name}`;
    }
}


//наследуем Функциональное наследование

function AdminNasled(name,age,isAdmin) {
    User.call(this,name,age);
    this.isAdmin=isAdmin;

}

//прототипное наследование
//объявили метод гритинг через прототип

User.prototype.greeting=function () {
    return`hello ${this.name}`;
};

//Для наследования админом prototype нужно делать


AdminNasled.prototype = Object.create(User.prototype);
AdminNasled.prototype.constructor =AdminNasled;

AdminNasled.prototype.seyAdmin = function () {
    return `hello admin`;
};

// Прикольная штука для того что бы запилить свой метод на все объекты!!!
// Object.prototype.myfunk = function () {
//     console.log('my function hello)');
// };

const user = new User('Dima', 33);
console.log(user);

const admin = new AdminNasled('Admin',33,true);
console.log(admin);
console.log(admin.seyAdmin());



















//ES6
class Moderator {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting() {
        //Вызов статической функции
        Moderator.mystaticFunc();
        return `hello moderator`;
    }

// создание стаитченской функции

    static mystaticFunc(){
        console.log('my statick func');
    }

}
const moderator = new Moderator('ира',50);
console.log(moderator.greeting());

//Наследование

class  SuperModerator extends Moderator{
        constructor (name,age){
            super(name,age);
        }

        myGriting(){
            // вызов метода родителя
            super.greeting();
        }
}


const superModerator = new SuperModerator('oleg',45);

superModerator.greeting();