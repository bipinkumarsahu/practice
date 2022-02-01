const getList = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open("GET", resource);
    request.send();
  });
};


getList('pr.json').then(data=>{
    console.log('promise 1 resolved',data);
    return getList('qr.json');
}).then(data=>{
    console.log('promise 2 resolved',data);
    return getList('sr.json');
}).then(data=>{
    console.log('promise 3 resolved',data);
}).catch((stat)=>{console.log('error occured',stat)});
// const getSomething = ()=>{

//     return new Promise((resolve,reject)=>{
//         resolve('some data');
//         //reject('some error');

//     })
// }

// getSomething().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// });
