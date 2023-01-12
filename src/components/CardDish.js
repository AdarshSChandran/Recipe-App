import React from 'react'

function CardDish({menuItem,showpopup}) {

  
  return (
 
        <li> 
          <a href="javaScript:;" onClick={()=>{return(
            showpopup(menuItem)
          )}}>
             <img src={menuItem.strMealThumb} alt="" className="br-10 "/>
             <h5>{menuItem.strMeal}</h5>
           </a>
        </li>
     
  )
}

export default CardDish