/** @format */

import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";

const Filter = () => {
	const allPokemon = useContext(PokemonContext).allPokemon;
	const setFilteredPokemon = useContext(PokemonContext).setFilteredPokemon;
	// const setTriggerRender = useContext(PokemonContext).setTriggerRender;

	const [filters, setFilters] = useState({ name: "", hp: 1 });

	useEffect(() => {
		setFilteredPokemon(
			allPokemon.filter(
				({ name, hp }) =>
					name.toLowerCase().includes(filters.name.toLowerCase()) &&
					hp >= filters.hp
			)
		);
		// setTriggerRender(s => (s ? false : true));
	}, [filters]);

	return (
		<div
			className='ui search'
			style={{
				display: "flex",
				justifyContent: "center",
				gap: "1rem",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					width: "200px",
				}}>
				<div className='ui icon input'>
					<input
						className='prompt'
						placeholder='Search by Name...'
						onChange={e => setFilters({ name: e.target.value, hp: filters.hp })}
					/>
					<i className='search icon' />
				</div>
				<label htmlFor='hp-filter'>Search by HP:</label>
				<input
					type='range'
					id='hp-filter'
					min={1}
					max={255}
					value={filters.hp}
					onChange={e => setFilters({ name: filters.name, hp: e.target.value })}
				/>
			</div>
		</div>
	);
};

export default Filter;
