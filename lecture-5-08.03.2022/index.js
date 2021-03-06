import { Pokemon as RenamePoke } from './classes.js';
import mockedPokemons from './mockedPokemons.js';
import {fillPokemonCard} from './seeder.js';

const btn = document.querySelector('button');

const pokemonsList = mockedPokemons.map((pokemon) => {
    const {
        name,
        abilities,
        base_experience: experience,
        sprites: { front_default: image },
    } = pokemon;
    // const { front_default: image } = sprites;
    // const abilitiesNames = abilities.map(el => el.ability.name);
    const abilitiesNames = abilities.map((el) => {
        const {
            ability: { name },
        } = el;
        return name;
    });
    return new RenamePoke(name, abilitiesNames, experience, image);
});

// btn.addEventListener('click', (event) => {
//     pokemonsList.forEach(fillPokemonCard);
// });

btn.addEventListener('click', (event) => {
    fillPokemonCard(pokemonsList[Math.floor(Math.random() * pokemonsList.length)]);
});

// btn.addEventListener('click', pokemonsList.forEach(fillPokemonCard));
