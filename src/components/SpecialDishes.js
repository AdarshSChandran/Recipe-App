import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import {AllMenuContext} from './AllMenuContext'
import AddToCart from "./AddToCart";

function SpecialDishes({menu}) {

  let [showPopup, setShowPopup] = useState(false)
  let [currentPopupDishDetails,setCurrentPopupDishDetails] = useState()
  let [addToCartProduct,setAddToCartProduct] = useState([{}])
  let [cartDisplay, setCartDisplay] = useState(false)
  
  const allMenus = useContext(AllMenuContext)

    
  /* For Showing Popup */
    function showPopupHandler(currentDish) {
      setShowPopup(true)
      setCurrentPopupDishDetails(currentDish)
      }

      
    // for closing popup
    function closePopupHandler(){
      return(
        setShowPopup(false)
      )
    }

    function AddToCartHandler(cartDishImage,cartDishTitle){
      setCartDisplay(true)
      setAddToCartProduct([
        ...addToCartProduct,
      {
        "img":cartDishImage,
        "title":cartDishTitle
      }])
    }

    // here index means howmuch items does menuItem take.
    let maxSpecialMenus = 8;
    let specialMenus = allMenus.map((menuItem,index)=>{
        if(index<maxSpecialMenus){
            return(
                <CardDish menuItem={menuItem} showpopup={showPopupHandler}   />
            
              )     
        }
       
    })



  return (
    
    <section className="special-dishes">
      {/* here && means if showpopup is true, display popup component , (a react method) */}
      {showPopup && <Popup closePopup={closePopupHandler} currentPopupDishDetails={currentPopupDishDetails}  AddToCartHandler={AddToCartHandler} />}
      <div className="container">
        
        {cartDisplay && <AddToCart addToCartProduct={addToCartProduct} />}
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            corporis delectus debitis, animi recusandae eligendi doloremque
            praesentium harum perspiciatis fuga velit expedita. Facere, alias
            quo?
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">

            {specialMenus}
          </ul>
         
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
