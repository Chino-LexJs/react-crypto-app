import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price Change", "24 hs Volume"];

function tableCoins({ coins, search }) {
  const result = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins) return <div>no coins</div>;

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <td key={index} >{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.map((coin, index) => (
          <CoinRow coin={coin} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default tableCoins;
