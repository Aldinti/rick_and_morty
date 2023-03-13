import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
	return (
		<div className={styles.ContainerSB}>
			<input type="search" />
			<button className={styles.btSB} onClick={() => props.onSearch("Estoy recibiendo un id")}>
				Agregar
			</button>
		</div>
	);
}
