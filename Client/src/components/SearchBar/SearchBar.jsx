import { useState } from "react";
import styles from "./SearchBar.module.css";

const cantChars = 5; //826;
let n = 0;

export default function SearchBar({ onSearch }) {
	const [Id, setId] = useState("");
	const handleChange = (event) => {
		const { value } = event.target;
		setId(value);
	};
	return (
		<div className={styles.bar}>
			<button
				className={styles.randomButton}
				onClick={() =>
					onSearch((n = Math.floor(Math.random() * cantChars) + 1))
				}>
				RaNdOm {n}
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
