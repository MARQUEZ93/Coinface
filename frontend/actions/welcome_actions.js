import axios from 'axios';
import { FETCH_SPARKLINES, FETCH_ASSETS } from './types';

//grab data for 24 hrs sparklines chart

const SPARKLINES_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=`;
const SPARKLINES_URL_END = `&tsym=USD&limit=10`;

export function fetchSparklines(assetSymbol) {
  const url = `${SPARKLINES_URL}`+`${assetSymbol}`+`${SPARKLINES_URL_END}`;
  const request = axios.get(url);

  return {
    type: FETCH_SPARKLINES,
    payload: request
  }
}

//grab data for current price & 24 hr change %

const ASSET_DATA_URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const ASSET_DATA_URL_END = `&tsym=USD&e=Kraken`;

export function fetchAssets(assetSymbol) {
  const url = `${ASSET_DATA_URL}`+`${assetSymbol}`+`${ASSET_DATA_URL_END}`;
  const request = axios.get(url);

  return {
    type: FETCH_ASSETS,
    payload: request
  }
}
