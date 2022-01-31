const getList = (callback)=>{
    const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    
        if(request.readyState === 4 && request.status === 200){
            callback(request.status ,request.responseText);
        }
        else if(request.readyState===4){
            callback(request.status,undefined);
        }
    
})
request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
request.send();
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);

getList((stat,data)=>{
   console.log('Callback Fired')
    if(stat === 200)
    console.log(data);
    else
    console.log('Couldnt fetch')
})

console.log(1);
console.log(2);
console.log(3);
console.log(4);

