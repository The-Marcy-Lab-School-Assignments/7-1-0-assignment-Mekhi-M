/** @format */

import { useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";
import PokemonContext from "./PokemonContext";

// const starterPokemon = [
// 	{
// 		id: 0,
// 		name: "butterfree 1",
// 		hp: 60,
// 		front:
// 			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
// 		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
// 	},
// 	{
// 		id: 1,
// 		name: "butterfree 2",
// 		hp: 60,
// 		front:
// 			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
// 		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
// 	},
// 	{
// 		id: 2,
// 		name: "butterfree 3",
// 		hp: 60,
// 		front:
// 			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
// 		back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
// 	},
// ];

const PokemonProvider = ({ children }) => {
	const [allPokemon, setAllPokemon] = useState([]);
	const [filteredPokemon, setFilteredPokemon] = useState();
	const [triggerRender, setTriggerRender] = useState(false);

	useEffect(() => {
		const fetch = async () => {
			const [data, error] = await handleFetch(`http://localhost:4000/pokemon`);

			if (data) setAllPokemon(data);
		};
		fetch();
	}, [triggerRender]);

	let contextValues = {
		allPokemon,
		setAllPokemon,
		filteredPokemon,
		setFilteredPokemon,
		setTriggerRender,
	};

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
