// import { useState } from "react
import React from "react";
import Pokemon from "./components/Pokemon";
import { Route, Routes } from "react-router-dom";
import Pokcard from "./components/Pokcard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        {/* <Route path="/pokemonDetails" element={<Pokcard />} /> */}
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Pokemon /> */}
    </>
  );
}

export default App;
