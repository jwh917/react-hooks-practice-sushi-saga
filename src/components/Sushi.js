import React, {useState} from "react";

// eatSushi

function Sushi({sushiInfo,emptyPlatesCount, setEmptyPlatesCount, moneyBalance, setMoneyBalance}) {  
  // console.log(sushiInfo)

  const {name, img_url, price} = sushiInfo
  // console.log(name, img_url, price, created_at)

  const [isEaten, setIsEaten] = useState(false)
  // const [emptyPlatesCount, setEmptyPlatesCount] = useState([])

  function eaten(){
    if(moneyBalance === 0) return
    if(moneyBalance < sushiInfo.price) return
    

    setIsEaten(true)
    console.log(sushiInfo)
    console.log(sushiInfo.price)
    // if(sushiInfo )
  //  emptyPlatesCount.map((plates) => {
  //   console.log(plates)
  //   if(plates.name === sushiInfo.name) return
  //   else setEmptyPlatesCount([...emptyPlatesCount, sushiInfo])
  // })

    setEmptyPlatesCount([...emptyPlatesCount, sushiInfo])
    
    setMoneyBalance(moneyBalance - sushiInfo.price)
    // if(moneyBalance === 0) return
  }

  // console.log(emptyPlatesCount)





  return (
    <div className="sushi">
      {/* eatSushi */}
      {/* <div className="plate" onClick={() => setIsEaten(true)}> */}
      <div className="plate" onClick={eaten}>
        {/* Tell me if this sushi has been eaten! */}
        {/* {false ? null : ( */}
        {isEaten ? null : (
          <img
            // src={/* Give me an image source! */ null}
            src={img_url}
            // alt={/* Give me a name! */ "Sushi"}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
