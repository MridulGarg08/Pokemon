🧩 Pokémon Search Engine — Pokedex (Full Stack Assignment)

A simple full-stack Pokémon search engine built as part of a coding challenge.
This project includes:

A Node.js + Express backend that fetches data from the official PokéAPI.

A React + Tailwind CSS frontend that displays rich Pokémon details.

Caching implemented on the backend for performance improvement.

🚀 Features
🔎 Search

Search for any Pokémon by name (e.g., pikachu, charizard, bulbasaur).

⚡ Instant Results

Backend caches Pokémon data for faster responses on repeated searches.

📦 Rich Details

The UI displays key attributes including:

Name

Image (sprite)

Height & weight

Types

Abilities

Base stats

🎨 Modern UI

Built with React and Tailwind CSS, providing a clean and simple interface.

🔧 Fully Local

🛠 Backend (Node + Express)
📍 Endpoint
GET /api/pokemon/:name

✔ Responsibilities

Fetch Pokémon from:

https://pokeapi.co/api/v2/pokemon/{name}


Cache responses

Apply cache expiry (5 minutes)

Apply cache size limit (max 50 entries)

Return JSON to frontend

▶ Run Backend
cd backend
npm install
node index.js


Server runs on:

http://localhost:3000

🖥 Frontend (React + Vite + Tailwind)
▶ Run Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

How it works

User searches for a Pokémon

Frontend sends a request to backend (/api/pokemon/:name)

Backend returns cached or fresh data

Details page displays a full Pokémon card

⚙ Caching Logic (Backend)

Stores Pokémon data in an in-memory object

Expires after 5 minutes

Max cache entries: 50

Removes oldest entry when limit is reached

🧪 Example Fetch
GET http://localhost:3000/api/pokemon/pikachu


Response:

{
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "sprites": {...},
  "types": [...],
  "abilities": [...],
  "stats": [...]
}

🧰 Tech Stack
Backend

Node.js

Express

node-fetch

Frontend

React

React Router

Tailwind CSS

Vite

📝 Notes

The frontend never directly calls the PokéAPI.
All data flows through the backend API (as required).

Code follows REST-style API guidelines.

Handles errors & edge cases (invalid Pokémon, server errors).

📤 Submission

This repository contains both backend and frontend code.
To run:

cd backend && node index.js
cd frontend && npm run dev

Both backend and frontend run locally.
No external deployments required.
