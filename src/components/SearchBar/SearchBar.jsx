import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
	const [Id, setId] = useState("");
	const handleChange = (event) => {
		const { value } = event.target;
		setId(value);
	}
	return (
		<div className={styles.bar}>
			<button
				className={styles.randomButton}
				onClick={() => onSearch(Math.floor(Math.random() * 826))}>
				RaNdOm
			</button>
			<input
				className={styles.searchInput}
				type="search"
				onChange={handleChange}
			/>
			<button
				className={styles.searchButton}
				onClick={() => onSearch(Id)}>
				Agregar
			</button>
		</div>
	);
}
