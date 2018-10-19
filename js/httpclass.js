class Http {
    get (url, callbeck){
        const xhr= new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();
        xhr.addEventListener('load',function () {
            callbeck(JSON.parse(xhr.responseText));
        })
    }
}

class PromiseHttp{
    get(url){
        return new Promise((resolve,reject)=>{
            const xhr= new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.send();

            xhr.addEventListener('load',function () {
               resolve(JSON.parse(xhr.responseText));
            });

            xhr.addEventListener('error',function () {
             reject('http error');
            })
        })
    }
}


class FetchHttp{
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(response => response.json())
                .then(response_body => resolve(response_body))
                .catch(err => reject(err));
        });
    }
}