/** @format */

import { useContext, useState } from "react";
import handleFetch from "../utils/handleFetch";
import PokemonContext from "../context/PokemonContext";

const PokemonForm = () => {
	const [name, setName] = useState("");
	const [hp, setHp] = useState("");
	const [front, setFront] = useState("");
	const [back, setBack] = useState("");
	let setTriggerRender = useContext(PokemonContext).setTriggerRender;

	const handleSubmit = async e => {
		e.preventDefault();
		if (!name.length || typeof hp !== "number" || !front.length || !back.length)
			return;

		const newPokemon = { name, hp, front, back };
		// console.log(newPokemon);

		const url = `http://localhost:4000/pokemon`;
		const option = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPokemon),
		};

		const [data, error] = await handleFetch(url, option);

		if (error) return;

		setTriggerRender(s => (s ? false : true));

		// setName("");
		// setHp("");
		// setFront("");
		// setBack("");
	};

	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<form className='ui form'>
				<div
					className='four fields'
					widths='equal'>
					<div className='field ui fluid'>
						<label>Name</label>
						<input
							type='text'
							name='name'
							placeholder='Name'
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
					</div>
					<div className='field ui fluid'>
						<label>HP</label>
						<input
							type='number'
							name='hp'
							placeholder='HP'
							min={1}
							max={255}
							value={hp}
							onChange={({ target }) =>
								setHp(() => {
									if (target.value < 1) return 1;
									if (target.value > 255) return 255;
									return Number(target.value);
								})
							}
						/>
					</div>
					<div className='field ui fluid'>
						<label>Front Image URL</label>
						<input
							type='text'
							name='front'
							placeholder='url'
							value={front}
							onChange={({ target }) => setFront(target.value)}
						/>
					</div>
					<div className='field ui fluid'>
						<label>Back Image URL</label>
						<input
							type='text'
							name='back'
							placeholder='url'
							value={back}
							onChange={({ target }) => setBack(target.value)}
						/>
					</div>
				</div>
				<button
					className='ui button'
					onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PokemonForm;
