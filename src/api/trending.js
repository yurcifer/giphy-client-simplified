import axios from "axios";
const { REACT_APP_API_KEY } = process.env;
const API_KEY = REACT_APP_API_KEY;

export async function getTrending (limit = 25, offset = 0) {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;
  const result = await axios.get(url);
  if (result.status >= 400) {
    throw Error('Something goes wrong');
  }

  return result.data;
}
