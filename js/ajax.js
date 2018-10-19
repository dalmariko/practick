const api_url = 'https://jsonplaceholder.typicode.com';

const news= {
    title: 'foo',
    body: 'bar',
    userId: 1
};


const xhr = new XMLHttpRequest();

// xhr.open('GET',`${api_url}/posts`);
xhr.open('POST',`${api_url}/posts`);
xhr.setRequestHeader('Content-type','application/json');
xhr.setRequestHeader('Content-Type','text/html');
xhr.setRequestHeader('Content-Type','charset=UTF-8');
xhr.setRequestHeader('Content-Encoding','gzip');




xhr.send();

xhr.addEventListener('load',()=>{
    console.log(JSON.parse(xhr.responseText),xhr.statusText);
});








xhr.addEventListener('error',()=>{
    console.log(xhr.statusText);
});