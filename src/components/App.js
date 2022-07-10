import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([])

  const [startIndex, setStartIndex] = useState(0)

  const [moneyBalance, setMoneyBalance] = useState(100)

  const [emptyPlatesCount, setEmptyPlatesCount] = useState([])


  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiData) => setSushiArray(sushiData));
  }, []);

  // console.log(sushiArray)

  // console.log(sushiArray.slice(startIndex, startIndex + 4))

  const sushiRendered = sushiArray.slice(startIndex, startIndex + 4)
  // console.log(sushiRendered)

  function getMoreSushi(event){
    setStartIndex(startIndex + 4)
  }


  console.log(emptyPlatesCount)





  return (
    <div className="app">
      <SushiContainer sushiRendered={sushiRendered} getMoreSushi={getMoreSushi} emptyPlatesCount={emptyPlatesCount} setEmptyPlatesCount={setEmptyPlatesCount} moneyBalance={moneyBalance} setMoneyBalance={setMoneyBalance}/>
      <Table moneyBalance={moneyBalance} emptyPlatesCount={emptyPlatesCount}/>
    </div>
  );
}

export default App;
