import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const getId = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

function Cards() {
  const page = useSelector((state) => state.pagination.page); // Ensure this is correct
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div className='flex flex-wrap justify-center gap-x-2 gap-y-3'>
      {data.map((pokemon, index) => {
        const id = getId(pokemon.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return (
          <Card
            key={index}
            name={pokemon.name}
            image={imageUrl}
            url={`/display/${id}`}
          />
        );
      })}
    </div>
  );
}

export default Cards;
