export const fetchWikipediaContent = async (query) => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${query}&origin=*`
  );
  const data = await response.json();
  return Object.values(data.query.pages)[0]?.extract || 'No content found.';
};

// Placeholder for Britannica/Grokipedia APIs
// export const fetchBritannicaContent = async (query) => { ... }
// export const fetchGrokipediaContent = async (query) => { ... }