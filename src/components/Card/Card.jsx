import styles from "./Card.module.css";

export default function Card({
	id,
	name,
	status,
	species,
	gender,
	origin,
	image,
	onClose,
}) {
	return (
		<div className={styles.container}>
			<button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
			<h2>Nombre: {name}</h2>
			<img src={image} alt={name} />
			<h2>Estado: {status}</h2>
			<h2>Especie: {species}</h2>
			<h2>Género: {gender}</h2>
			{/* <h2>Origen: {origin}</h2> */}
		</div>
	);
}
