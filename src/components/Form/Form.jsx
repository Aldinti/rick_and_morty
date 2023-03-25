import { useState } from "react";
import styles from "../Form/Form.module.css";
import validate from "./Validation";

export default function Form({ login }) {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const { name: property, value } = event.target;
		console.log("Hola ",property, value);
		setUserData({ ...userData, [property]: value });
		console.log("Chao",userData.username, userData.password);
		validate({ ...userData, [property]: value }, errors, setErrors);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div>
			<form
				className={styles.container}
				onSubmit={submitHandler}>
				<img
					src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
					alt="Rick and Morty Login"
				/>
				<div>
					<label htmlFor="username">Username: </label>
					<br />
					<input
						type="text"
						name="username"
						value={userData.username}
						onChange={handleInputChange}
						// className={errors.username ? styles.bad : styles.good}
					/>
					<p>{errors.username}</p>
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<br />
					<input
						type="text"
						name="password"
						value={userData.password}
						onChange={handleInputChange}
					/>
					<p>{errors.password}</p>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
