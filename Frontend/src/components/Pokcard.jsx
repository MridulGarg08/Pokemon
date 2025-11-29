// import React from "react";

// const Pokcard = (props) => {
//   const data = props.data;
//   if (!data) {
//     return <p className="text-center">Loading Pokémon...</p>;
//   }
//   return (
//     <>
//       <div>
//         <h1>Pokemon Name: {data.name}</h1>
//         <img src={data.sprites.front_default} alt={data.name} />

//         <p>Height: {data.height}</p>
//         <p>Weight: {data.weight}</p>

//         <h3>Types:</h3>
//         <ul>
//           {data.types.map((t) => (
//             <li key={t.slot}>{t.type.name}</li>
//           ))}
//         </ul>

//         <h3>Abilities:</h3>
//         <ul>
//           {data.abilities.map((a) => (
//             <li key={a.slot}>{a.ability.name}</li>
//           ))}
//         </ul>

//         <h3>Base Stats:</h3>
//         <ul>
//           {data.stats.map((s) => (
//             <li key={s.stat.name}>
//               {s.stat.name}: {s.base_stat}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Pokcard;

import React from "react";

const Pokcard = ({ data }) => {
  return (
    <div className="w-80 mx-auto bg-white rounded-xl shadow-lg p-5 mt-6">
      {/* Pokémon Name */}
      <h1 className="text-2xl font-bold text-center mb-4 tracking-wide">
        {data.name.toUpperCase()}
      </h1>

      {/* Pokémon Image */}
      <div className="flex justify-center mb-4">
        <img
          className="w-40 drop-shadow-md"
          src={data.sprites.front_default}
          alt={data.name}
        />
      </div>

      {/* Height & Weight */}
      <div className="flex justify-between mb-4 text-gray-700">
        <p>
          <span className="font-semibold">Height:</span> {data.height}
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {data.weight}
        </p>
      </div>

      {/* Types */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-1">Types</h3>
        <div className="flex gap-2">
          {data.types.map((t) => (
            <span
              key={t.slot}
              className={`px-3 py-1 rounded-full text-white text-sm capitalize ${getTypeColor(
                t.type.name
              )}`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* Abilities */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-1">Abilities</h3>
        <ul className="list-disc list-inside text-gray-700">
          {data.abilities.map((a) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))}
        </ul>
      </div>

      {/* Base Stats */}
      <div>
        <h3 className="font-semibold text-lg mb-1">Base Stats</h3>
        <div className="grid grid-cols-2 gap-2">
          {data.stats.map((s) => (
            <div
              key={s.stat.name}
              className="flex justify-between bg-gray-100 px-3 py-1 rounded"
            >
              <span className="capitalize">{s.stat.name}</span>
              <span className="font-medium">{s.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 🔥 Function to map type → Tailwind color classes
function getTypeColor(type) {
  const colors = {
    fire: "bg-orange-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    fighting: "bg-red-700",
    poison: "bg-purple-600",
    ground: "bg-yellow-700",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    rock: "bg-yellow-800",
    ghost: "bg-purple-800",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-400",
    fairy: "bg-pink-300 text-black",
    normal: "bg-gray-300 text-black",
  };

  return colors[type] || "bg-gray-400";
}

export default Pokcard;
