import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
// use sushi

// eatSushi

// eatSushi={eatSushi}

function SushiContainer({sushiRendered, getMoreSushi, emptyPlatesCount, setEmptyPlatesCount, moneyBalance, setMoneyBalance}) {

  // console.log(sushiArray)

  const sushiForDisplay = sushiRendered.map((sushiInfo) => {
    return (
      <Sushi
      key={sushiInfo.id}
      sushiInfo={sushiInfo}
      emptyPlatesCount={emptyPlatesCount}
      setEmptyPlatesCount={setEmptyPlatesCount}
      moneyBalance={moneyBalance}
      setMoneyBalance={setMoneyBalance}
      />
    )
  
  })


  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiForDisplay}
      <MoreButton getMoreSushi={getMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
