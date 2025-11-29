const express = require ("express")
const app=express();
const cache = {};
const CACHE_EXPIRY = 5 * 60 * 1000;
const MAX_CACHE_ENTRIES = 50;

function evictOldestCacheEntry() {
  let oldestKey = null;
  let oldestTime = Infinity;

  for (const key in cache) {
    if (cache[key].timestamp < oldestTime) {
      oldestTime = cache[key].timestamp;
      oldestKey = key;
    }
  }

  if (oldestKey) {
    console.log("Evicting cache entry:", oldestKey);
    delete cache[oldestKey];
  }
}

app.get('/api/pokemon/:name', async(req, res) => {

  try{
  const pokname = req.params.name; // Access query parameter
    console.log("User requested pokemon",pokname);
    const cachedEntry = cache[pokname];
    if(cachedEntry && Date.now()-cachedEntry.timestamp < CACHE_EXPIRY)
    {
      console.log("Serving ",pokname," data from cache!!!");
      return res.json(cachedEntry.data);
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokname}`;
    const response = await fetch(apiUrl);

    if(!response.ok)
    {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    const data= await response.json();

    if (Object.keys(cache).length >= MAX_CACHE_ENTRIES) {
      evictOldestCacheEntry(); 
    }

    cache[pokname] = {
      data: data,
      timestamp: Date.now()
    };

    return res.json(data); // Send a JSON response
  }
   catch{
    console.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal server error" });
   }
  });
  
app.listen(3000,()=>{
    console.log("Server Started!!!");
})
