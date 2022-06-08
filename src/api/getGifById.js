import axios from "axios";

const API_KEY = "epUC1SLUtOPsDjfYBtSkIC2tr2M0SVTJ";

export async function getGifById (gifId = '') {
  const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`;
  const result = await axios.get(url);
  if (result.status >= 400) {
    throw Error('Something goes wrong');
  }
  return result.data.data;
}