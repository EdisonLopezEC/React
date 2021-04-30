import getHeroesById from './data/gHeroe'

// console.log('empiez'); 
// const promesa = new Promise( (resolve,reject)=> {
//     setTimeout(()=>{
//         const heroe=getHeroesById(3);
//         reject(heroe);
//         // reject('No se pudo encontrar el heroe');

//     },2000);
// });


// promesa.then( (heroe)=> {
//     console.log('Heroe: ',heroe);
// })
// .catch(err=>console.warn(err));

const getHeroeByAsync = (id)=>{
    const promesa = new Promise( (resolve,reject)=> {
        setTimeout(()=>{
            const heroe=getHeroesById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
            // reject('No se pudo encontrar el heroe');
    
        },2000);
    });

    return promesa;
}

getHeroeByAsync(4)
.then(console.log)
.catch(console.warn);

                


