import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pokcard from "./Pokcard";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [pokemonname, setPokemonname] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log(pokemonname);
  //     console.log(pokemonData);
  //   }, [pokemonname, pokemonData]);
  const findpok = async (pok) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/pokemon/${pokemonname.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokemon not found!!!");
      }

      const data = await response.json();
      setPokemonData(data);
      //   console.log("Data:", data); // temporary
      console.log(pokemonData);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={pokemonname}
          placeholder="Enter Pokemon Name"
          onChange={(e) => {
            setPokemonname(e.target.value);
            // console.log(pokemonname);
          }}
        ></input>
        <button
          onClick={() => {
            findpok(pokemonname);
            // navigate("/pokemonDetails");
            setPokemonname("");
            // setPokemonData(null);
          }}
        >
          Search
        </button>
        {/* <h1></h1> */}
        {pokemonData && (
          <div>
            <h1>{pokemonData.name}</h1>
            <Pokcard data={pokemonData} />
          </div>
        )}
      </div>
    </>
  );
};
export default Pokemon;
