import axios from 'axios';

const useMarvelService = () => {

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=1993ba6ffb336a484ae8d64ac5c9983a';
  const _baseOffset = 110;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await axios.get(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.data.results.map(_transformChar);
  }

  const _transformChar = (char) => {
    return {
      name: char.name,
      description: char.description ? char.description : 'No description for this character...',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      wiki: char.urls[1].url,
      id: char.id,
    }
  }

  return {
    getAllCharacters,
  }
}

export default useMarvelService;