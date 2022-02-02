const getList = async ()=>{
    const response =  await fetch('jsons/userss.json');

    if(response.status !==200)
    {
        throw new Error("Cant fetch data");
    }

    const data = await response.json();
    return data

}

getList()
.then(data=> console.log('data fetched ',data))
.catch(err=>console.log(err))