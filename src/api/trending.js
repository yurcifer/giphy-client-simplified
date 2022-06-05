import axios from "axios";

const API_KEY = "epUC1SLUtOPsDjfYBtSkIC2tr2M0SVTJ";

export async function getTrending (limit = 25, offset = 0) {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;
  const result = await axios.get(url);
  console.log("STATUS: " + result.status);
  if (result.status >= 400) {
    throw Error('Something goes wrong');
  }

  return result.data;
}
