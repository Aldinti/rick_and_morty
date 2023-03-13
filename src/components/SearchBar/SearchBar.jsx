import Style from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch("Texto temporal")}>Agregar</button>
      </div>
   );
}

