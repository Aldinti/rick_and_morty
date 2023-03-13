import Style from "./Card.module.css";

export default function Card({ gender, image, name, onClose, species }) {
	return (
		<div className={Style.container}>
			<button onClick={onClose}>X</button>
			<h2>{name}</h2>
			<img
				className={Style.imagen}
				src={image}
				alt={name}
			/>
			<h2>{species}</h2>
			<h2>{gender}</h2>
		</div>
	);
}
