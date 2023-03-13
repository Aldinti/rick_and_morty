import Style from './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className={Style.App}>
      <div>
        {/* <Card
          // id={Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> */}
      </div>
      <hr />
      <div className={ Style.hijo }>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  )
}

export default App
