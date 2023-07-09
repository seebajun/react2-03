import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import './Stats.css'

const Stats = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async () => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));
    setPokemon({ name, stats, src });
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <div className="containerCard">
      <Card className="cardPokemon">
        <Card.Img src={pokemon.src} />
        <Card.Body className="cardStats">
          <Card.Title className="nombre">{pokemon.name}</Card.Title>
          <Card.Text>
            {pokemon.stats &&
              pokemon.stats.map((stat, index) => (
                <div key={index}>
                  <p>
                    <strong >{stat.name}:</strong> <> {stat.base}</>
                  </p>
                </div>
              ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Stats;
