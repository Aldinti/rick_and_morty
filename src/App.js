import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import styles from "./components/Nav/Nav.module.css";
import { useState } from "react";

function App() {
	const [characters, setCharacters] = useState([]);

	/* FUNCIÓN ONSEARCH */
	const onSearch = (id) => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((resp) => resp.json())
			.then((data) =>
				data.name &&
				!characters.find((persona) => persona.id === data.id)
					? setCharacters((oldCharacters) => [...oldCharacters, data])
					: alert(`El personaje con id ${id} no se encontró.`),
			)
			.catch((err) => console.log(err));
	};
	/* FUNCIÓN ONCLOSE */
	const onClose = (id) => {
		// filter no modifica el array original
		setCharacters(
			characters.filter((personaje) => personaje.id !== Number(id)),
		);
	};
	/* FUNCIÓN RANDOM */
	const getRandom = () => Math.floor(Math.random() * 826);

	return (
		<div
			className="App"
			style={{ padding: "25px" }}>
			<div className={styles.nav}>
				<Nav onSearch={onSearch} getRandom={getRandom} />
			</div>
			<div>
				<Cards
					characters={characters}
					onClose={onClose}
				/>
			</div>
		</div>
	);
}

export default App;
