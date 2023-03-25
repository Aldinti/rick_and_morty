import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail"
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
	// HOOKS
	const [characters, setCharacters] = useState([]);
	const { pathname } = useLocation();
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	
	useEffect(() => {
		!access && navigate("/");
	}, [access, navigate]);
	
	// FAKE CREDENTIALS
	const USER_NAME = "aldopati@soyhenry.com";
	const PASS_WORD = "12345";

	// EVENTS HANDLERS
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
	
	const onClose = (id) => {
		// filter no modifica el array original
		setCharacters(
			characters.filter((personaje) => personaje.id !== Number(id)),
		);
	};
	
	const login = ({username, password}) => {
		if (username === USER_NAME && password === PASS_WORD) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("¡Datos incorrectos!")
		}
	}

	// RENDER
	return (
		<div
			className="App"
			style={{ padding: "25px" }}>
			{pathname !== "/" && <Nav onSearch={onSearch} />}
			<Routes>
				<Route
					path="/"
					element={<Form login={login} />}
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
