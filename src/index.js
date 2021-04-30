import getHeroesById from './data/gHeroe'

console.log('empiez');
const promesa = new Promise( (resolve,reject)=> {
    setTimeout(()=>{
        const heroe=getHeroesById(3);
        console.log(heroe);
    },2000);
});


promesa.then( ()=> {
    console.log('Then de la promesa');
})