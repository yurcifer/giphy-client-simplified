import axios from "axios";
const { REACT_APP_API_KEY } = process.env;
const API_KEY = REACT_APP_API_KEY;

export async function getGifById (gifId = '') {
  const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`;
  const result = await axios.get(url);
  if (result.status >= 400) {
    throw Error('Something goes wrong');
  }
  return result.data.data;
}