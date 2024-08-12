/** @format */

import { useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";
import PokemonContext from "./PokemonContext";

// TODO: Import the PokemonContext

const starterPokemon = [
	{
		id: 0,
		name: "butterfree 1",
		hp: 60,
		front:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
	},
	{
		id: 1,
		name: "butterfree 2",
		hp: 60,
		front:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
	},
	{
		id: 2,
		name: "butterfree 3",
		hp: 60,
		front:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
	},
];

const PokemonProvider = ({ children }) => {
	const [allPokemon, setAllPokemon] = useState(starterPokemon);

	useEffect(() => {
		const fetch = async () => {
			const [data, error] = await handleFetch(`http://localhost:4000/pokemon`);

			if (data) setAllPokemon(data);
		};
		fetch();
	}, []);

	let contextValues = { allPokemon, setAllPokemon };

	// console.log(allPokemon);

	return (
		<>
			<PokemonContext.Provider value={contextValues}>
				{children}
			</PokemonContext.Provider>
		</>
	);
};

export default PokemonProvider;
