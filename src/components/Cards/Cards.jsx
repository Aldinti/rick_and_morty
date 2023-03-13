import Card from "../Card/Card";
import Style from  "./Cards.module.css"

export default function Cards(props) {
  const { characters } = props;
//   console.log(characters);
  return (
    <div className={Style.Cards}>
      {characters.map((char) => (
        <Card
          key={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
