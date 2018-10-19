
let allTasck=[];

let text = prompt('Введите текст задачи');

function addTasck(text) {
    if (!text) return alert('Вы не ввели задачу');

    const task= {
        text:text,
        id: allTasck.length
    };
    allTasck.push(task);
    console.log(allTasck);
}

addTasck(text);

