import React from 'react';

function CharacterList({ characters, onDelete }) {
  return (
    <ul>
      {characters.map(character => (
        <li key={character.url}>
          {character.name} 
          <button onClick={() => onDelete(character.url)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
