import heroes from './heroes';

console.log(heroes);

const getHeroesById=(id)=>{
    return heroes.find((heroe)=>{
        return heroe.id === id;
    })
}

export default getHeroesById;

