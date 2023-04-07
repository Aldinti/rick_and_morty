import styles from "./Card.module.css";
import { Link } from "react-router-dom";

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
			<button
				onClick={() => onClose(id)}
				className={styles.closeButton}>
				X
			</button>
			<Link to={`/detail/${id}`}>
				<h5>{name}</h5>
			</Link>
			<img
				src={image}
				alt={name}
			/>
			{/* <h5>Estado: {status}</h5> */}
			<h5>Especie: {species}</h5>
			<h5>Género: {gender}</h5>
			{/* <h2>Origen: {origin}</h2> */}
		</div>
	);
}
