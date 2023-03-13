import styles from "./Card.module.css";

export default function Card({ name, species, image, gender, onClose }) {
	return (
		<div className={styles.Container}>
			<div className={styles.buttonContainer}>
				<button
					onClick={onClose}
					className={styles.button}>
					X
				</button>
			</div>
			<div className={styles.imgContainer}>
				<img
					src={image}
					alt="Not found"
				/>
				<div className={styles.name}>
					<h2>{name}</h2>
				</div>
			</div>
			<div className={styles.propsContainer}>
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</div>
		</div>
	);
}
