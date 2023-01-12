import React from 'react'

function Popup({closePopup,currentPopupDishDetails,AddToCartHandler}) {
    // console.log("current Popup DishDetails are",currentPopupDishDetails);
   
                    // function for generating a random number as price
                    function generateRandom(min = 30, max = 100) {

                      // find diff
                      let difference = max - min;
                  
                      // generate random number 
                      let rand = Math.random();
                  
                      // multiply with difference 
                      rand = Math.floor( rand * difference);
                  
                      // add with min value 
                      rand = rand + min;
                  
                      return rand;
                  }

                  
  return (
    
    <div className='popup'>
        <div className="popup-content">
            <div className='popup-header'>
                <img src={currentPopupDishDetails.strMealThumb} alt="" />
                <h5 className='popup-header-category'>{currentPopupDishDetails.strCategory}</h5>
            </div>
            <h2>{currentPopupDishDetails.strMeal}</h2>
            <p>{currentPopupDishDetails.strInstructions}</p>
            <ul className='flex dish-ingredients'>
                <li>{currentPopupDishDetails.strIngredient1}</li>
                <li>{currentPopupDishDetails.strIngredient2}</li>
                <li>{currentPopupDishDetails.strIngredient3}</li>
                <li>{currentPopupDishDetails.strIngredient4}</li>
             </ul>
            <div className='popup-price-ordernow'>
              <h3>${generateRandom()}</h3>
              <button onClick={()=>{AddToCartHandler(currentPopupDishDetails.strMealThumb,currentPopupDishDetails.strMeal)}}>
                Add to Cart
              </button>
            </div>
            <h5 className='popup-close' onClick={closePopup }>Close</h5>
        
        </div>
    </div>
  )
}

export default Popup