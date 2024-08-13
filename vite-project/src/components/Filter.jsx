/** @format */

import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

const Filter = () => {
	const allPokemon = useContext(PokemonContext).allPokemon;
	const setFilteredPokemon = useContext(PokemonContext).setFilteredPokemon;

	const filter = filterQuery => {
		setFilteredPokemon(
			allPokemon.filter(({ name }) =>
				name.toLowerCase().includes(filterQuery.toLowerCase())
			)
		);
	};

	return (
		<div className='ui search'>
			<div className='ui icon input'>
				<input
					className='prompt'
					placeholder='Search by Name...'
					onChange={e => filter(e.target.value)}
				/>
				<i className='search icon' />
			</div>
		</div>
	);
};

export default Filter;
