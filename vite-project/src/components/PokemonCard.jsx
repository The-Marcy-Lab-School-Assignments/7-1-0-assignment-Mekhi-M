/** @format */

import { useState } from "react";

const PokemonCard = ({ name, hp, front, back }) => {
	const [spriteToggle, setSpriteToggle] = useState(front);

	const handleClick = () =>
		setSpriteToggle(spriteToggle === front ? back : front);

	return (
		<div
			className='ui card'
			onClick={handleClick}>
			<div>
				<div className='image'>
					<img
						alt={name}
						src={spriteToggle}
					/>
				</div>
				<div className='content'>
					<div className='header'>{name}</div>
				</div>
				<div className='extra content'>
					<span>
						<i className='icon heartbeat red' />
						{hp}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
