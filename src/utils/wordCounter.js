export const countWords = (text, word) => {
  if (!text) return 0;
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
};

export const highlightWords = (text, word) => {
  if (!text || !word) return text;
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, (match) => `<mark class="bg-yellow-500 text-black">${match}</mark>`);
};