export const words = ["bomb", "diamond", "test", "something"];

export function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
