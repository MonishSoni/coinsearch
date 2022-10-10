import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (pageno)=>{
    setPage(pageno);
    window.scroll(0,0)
  }

  const url =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} handlePageChange={handlePageChange} />} />
        <Route path=":coinId" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
