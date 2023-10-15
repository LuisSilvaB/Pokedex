import {POKEMON_TYPE_COLORS} from './constants.js'; 
const getColorByPokemonType = (type) => { 
    return POKEMON_TYPE_COLORS[type.toLowerCase()]; 
}
export default getColorByPokemonType;