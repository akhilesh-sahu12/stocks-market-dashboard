import React from "react";
import {
  BsFillEnvelopeFill,
  BsFillGrid3X3GapFill,
  BsFillGearFill,
  BsBarChartLine,
} from "react-icons/bs";
import SearchStock from "./SearchStock";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Stock</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>1000</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>News</h3>
            <BsFillEnvelopeFill className="card_icon" />
          </div>
          <h1>10</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Charts</h3>
            <BsBarChartLine className="card_icon" />
          </div>
          <h1>5</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Settings</h3>
            <BsFillGearFill className="card_icon" />
          </div>
          <h1>2</h1>
        </div>
      </div>
      <SearchStock/>
    </main>
  );
}

export default Home;
