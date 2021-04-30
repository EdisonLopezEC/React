

const getImagen = async()=>{

    const apiKey = '6Rj2C0QdylT0T0Oj00xuyI8LNqKEka8b';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url }=data.images.original;
    const img =document.createElement('img');
    img.src=url;
    document.body.append(img);
}

getImagen().then(console.log);




// peticion
//     .then(resp=>resp.json())
//     .then(({data})=>{
//         const { url }=data.images.original;
//         const img =document.createElement('img');
//         img.src=url;
//         document.body.append(img);
//     })
//     .catch(console.warn);