let  arrNumbers=[1,12,43,1,15,10,9];

/*
любое отрицательное чилос остаются на своих естах
любое положительное меняются местами.
ноль тостаются на свих местах.

*/



arrNumbers.sort((prev, next)=> prev>next?1:-1
    // prev-next //короткая запись стрелочной функции для действий в обно действие
    // return prev>next?1:-1;
    // return prev-next;
);

console.log(arrNumbers);