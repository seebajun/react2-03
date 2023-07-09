import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");

  const navigate = useNavigate();

  const url = "http://pokeapi.co/api/v2/pokemon";

  const getPokemon = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemons(results);
  };

  const goToStats = async () => {
    if (pokemonSelected) navigate(`/pokemons/${pokemonSelected}`);
    else alert("Please select a pokemon");
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Seleciona un Pokémon</h1>
      <div className="selectContainer">
        <select
          value={pokemonSelected}
          onChange={({ target }) => setPokemonSelected(target.value)}
        >
          <option value="" disabled>
            Pokémons
          </option>
          {pokemons.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </select>
        <Button variant="dark" onClick={goToStats}>
          Ver Stats
        </Button>
      </div>
    </div>
  );
};

export default Pokemons;
