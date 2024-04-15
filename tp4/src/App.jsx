import React, { useState} from 'react';
import './App.css'
import CharacterList from './components/list';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      if (!response.ok) {
        throw new Error('Error fetching characters');
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);error
    }
  };

  const handleDelete = (id) => {
    setCharacters(characters.filter(character => character.url !== id));
  };

  return (
    <div>
      <h1>Lista de Personajes de Star Wars</h1>
      <button onClick={fetchCharacters}>Cargar lista</button>
      <CharacterList characters={characters} onDelete={handleDelete} />
    </div>
  );
}

export default App;
