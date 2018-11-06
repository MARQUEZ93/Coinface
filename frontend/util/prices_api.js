const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;

const URL_SPARK = `https://min-api.cryptocompare.com/data/histoday?fsym=`;
const URL_SPARK_END = `&tsym=USD&limit=60`;

export const getPrice = (symbol) => (
  $.ajax({
    url: `${URL}`+`${symbol}`+`${URL_END}`,
    method: 'GET'
  })
);

export const getSparklines = (symbol) => (
  $.ajax({
    url: `${URL_SPARK}`+`${symbol}`+`${URL_SPARK_END}`,
    method: 'GET'
  })
);
