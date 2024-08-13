/** @format */

import PokemonCard from "./PokemonCard";
import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";

const PokemonCollection = () => {
	const allPokemon = useContext(PokemonContext).allPokemon;
	const filteredPokemon = useContext(PokemonContext).filteredPokemon;

	const list = filteredPokemon?.length > 0 ? filteredPokemon : allPokemon;

	return (
		<div className='ui six cards'>
			{list?.map((pokemon, i) => (
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
