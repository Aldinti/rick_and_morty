import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import styles from "./components/Nav/Nav.module.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail"
import Error from "./components/Error/Error.jsx";

function App() {
	const [characters, setCharacters] = useState([]);

	/* FUNCIÓN ONSEARCH */
	const onSearch = (id) => {
		if (characters.find((persona) => persona.id === Number(id)))
			return window.alert("Tarjeta de personaje ya está!");
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((resp) => resp.json())
			.then((data) =>
				data.name
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

	return (
		<div
			className="App"
			style={{ padding: "25px" }}>
			{
				/* <div className={styles.nav}>*/
				<Nav onSearch={onSearch} />
				/*</div> */
			}
			<Routes>
				<Route
					path="/"
					element={
						<Cards
							characters={characters}
							onClose={onClose}
						/>
					}
				/>
				<Route
					path="/home"
					element={
						<Cards
							characters={characters}
							onClose={onClose}
						/>
					}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/detail/:detailId"
					element={<Detail />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</div>
	);
}

export default App;
