import React, {useState,useEffect} from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes' 
import Header from './Header'
import { AllMenus } from './AllMenuContext'

// useContext
// step 1 : 
// create a global context that can be used by any children



function Menus() { 

    

   
    


    
   

  return (
    <div>
      <Header />
      <Hero />
      {/* step:2 */}
      <AllMenus>
        {<SpecialDishes />}
        { 
          <FilteredDishes /> 
        }
      </AllMenus>
    </div>
  )
}

export default Menus