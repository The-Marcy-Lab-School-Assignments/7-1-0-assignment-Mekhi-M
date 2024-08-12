/** @format */

import PokemonCard from "./PokemonCard";
import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";

const PokemonCollection = () => {
	const allPokemon = useContext(PokemonContext).allPokemon;

	return (
		<div className='ui six cards'>
			{allPokemon?.map(pokemon => (
				<PokemonCard
					key={pokemon.id}
					name={pokemon.name}
					hp={pokemon.hp}
					front={pokemon.front}
					back={pokemon.back}
				/>
			))}
		</div>
	);
};

export default PokemonCollection;
