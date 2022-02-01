const getList = (callback)=>{
    const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(request.status ,data);
        }
        else if(request.readyState===4){
            callback(request.status,undefined);
        }
    
})
request.open('GET','pr.json')
request.send();
}



