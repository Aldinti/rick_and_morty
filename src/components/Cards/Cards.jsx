import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
	const { characters } = props;
	return (
		<div className={styles.divCards}>
			{characters.map(({ id, name, species, gender, image }) => (
				<Card
					key={id}
					name={name}
					species={species}
					gender={gender}
					image={image}
					onClose={() => window.alert("Emulamos que se cierra la card")}
				/>
			))}
		</div>
	);
}
