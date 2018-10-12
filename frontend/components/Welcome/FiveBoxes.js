import React, { Component } from 'react';
import Box from './Box/Box';

const btc = "https://www.coinbase.com/assets/assets/1-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png";
const bch = "https://www.coinbase.com/assets/assets/1831-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png";
const etc = "https://www.coinbase.com/assets/assets/1321-dbbd894924b65cc449f43c7bc7e9325e0478bbd4e9723249ac029fc6279cb55e.png";
const eth = "https://www.coinbase.com/assets/assets/1027-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png";
const ltc = "https://www.coinbase.com/assets/assets/2-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png";


class FiveBoxes extends Component {

  render() {
    return (
      <div className="FiveBoxes">
        <Box src={btc} symbol="BTC" name="Bitcoin"/>
        <Box src={bch} symbol="BCH" name="Bitcoin Cash"/>
        <Box src={eth} symbol="ETH" name="Ethereum"/>
        <Box src={ltc} symbol="LTC" name="Litecoin"/>
        <Box src={etc} symbol="ETC" name="Ethereum Classic"/>
      </div>
    );
  }
}
export default FiveBoxes;
