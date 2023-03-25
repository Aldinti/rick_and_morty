import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
	const [characters, setCharacters] = useState({});
	const { detailId } = useParams();
	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => setCharacters(response.data),
		);
		/* fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((res) => res.json())
			.then((data) => setCharacters(data)); */
	}, [detailId]);
	
	const { id, name, status, species, gender, origin, image } = characters;
	return (
		<div>
			<Link to="/home">
			<button>Regresar</button>
			</Link>
			{name ? (
				<div key={id}>
					<h1>Detail</h1>
					<h2>Nombre: {name}</h2>
					<h3>Status: {status}</h3>
					<h3>Especie: {species}</h3>
					<h3>Género: {gender}</h3>
					<h3>Origen: {origin?.name}</h3>
					<img src={image} alt={name}	/>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
