import axios from 'axios';

const ASSET_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=`;
const ASSET_URL_END = `&tsym=USD&limit=10`;

export const FETCH_WELCOME_DATA = 'FETCH_WELCOME_DATA';

export function fetchWelomeAssetData(assetSymbol) {
  const url = `${ASSET_URL}`+`${assetSymbol}`+`${ASSET_URL_END}`; 
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
