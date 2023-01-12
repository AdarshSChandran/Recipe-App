import React, { useContext, useState, useEffect } from "react";
import { AllMenuContext } from "./AllMenuContext";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import Popup from "./Popup";




function FilteredDishes(props) {

  const allMenu = useContext(AllMenuContext)


  /* here there is no need to put props.allMenus on a state, we can directly give in filter function, but inorder to 
  learn conditional Rendering we give a useState */
  let [allMenus, setAllMenus] = useState(allMenu);
  // creating a state to display filtered list
  let [filteredDishes, setFilteredDishes] = useState([]);
  /*setting a state for active category*/
  let [activeDish, setActiveDish] = useState("Beef");
  // for pagination
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  // to show which page is active
  let [activePage, setActivePage] = useState();
  //  to show popup on filtered dishes
  let [showPopupFilteredDishes, setShowPopupFilteredDishes] = useState(false)
  // current popup dish details
  let [currentFdPopupDishDetails, setcurrentFdPopupDishDetails] = useState()
  // State for Menu Category
  let [menuCategory,setMenuCategory] =  useState([])
  // state for single dish
  let [singleDish,setSingleDish] = useState([])

 


  let indexOfLastDish = currentPage * itemsPerPage;
  // 1 x 4 = 4
  // 2 x 4 = 8
  // 3 x 4 = 12
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  // 4 - 4 = 0
  // 8 - 4 = 4
  // 12 - 4 = 8

  let showDishesInEachPage = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );
  
  // let InitialShowDishesInEachPage = initialShowCategory.slice(
  //   indexOfFirstDish,
  //   indexOfLastDish
  // )



    /* To get all categories */
    async function getAllTheCategories(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
      let response = await fetch(API_URL)
      let categoryData = await response.json()
      setMenuCategory(categoryData.categories)
    }
    
    
    async function getOnlyOneDish(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      let response = await fetch(API_URL)
      let singleDishData = await response.json()
      setSingleDish(singleDishData.meals)
    }


    

    useEffect(()=>{
      getAllTheCategories();
      getOnlyOneDish();
    },[])





  
  // dishes to show while loading in filtered category dishes
  let maxItem = 4
  let initialShowCategory = singleDish.map((item,index) => {
    if(index < maxItem){
      return (
        <li>
          <img src={item.strMealThumb} alt="" className="br-10" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
   
  });


  /* For Popup displaying  */
   function showPopupOnFdHandler(currentDish){
    setShowPopupFilteredDishes(true)
    setcurrentFdPopupDishDetails(currentDish)
  }

  /* For Popup display closing */
  function closeFdPopupHandler(){
    return(
      setShowPopupFilteredDishes(false)
    )
  }

  // show dishes on click
  function showFilteredDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);
    setCurrentPage(1)
    setActivePage(1)

    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return (
          <CardDish menuItem={menuItem} showpopup={showPopupOnFdHandler} />
        );
      });
    setFilteredDishes(filteredDishesAre);
  }

   
 

  // lets show all categories
  let allCategories = menuCategory.map((item) => {
    return (
      <li
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="filtered-dishes">
      {showPopupFilteredDishes && <Popup closePopup={closeFdPopupHandler} currentPopupDishDetails={currentFdPopupDishDetails} /> }
      <div className="container">
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            ducimus ipsa, nostrum assumenda laudantium consequatur cumque minus
            tempore natus. Voluptas.
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {initialShowCategory}
            {filteredDishes.length || initialShowCategory.length != 0 ? (
              showDishesInEachPage 
            ) : (
              <div className="alert">
                <h3>Sorry,No items found</h3>
                <h4>Please try another dishes</h4>
              </div>
            )}
          </ul>
        </div>

        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          activePage={activePage}
          setActivePage={setActivePage}
          // initialShowCategory={initialShowCategory}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
