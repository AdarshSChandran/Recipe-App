import React, { useState } from 'react'

function Pagination({filteredDishes,itemsPerPage,setCurrentPage,activePage,setActivePage}) {

    

    let numberOfPages = []
    for(let i=1; i<=Math.ceil(filteredDishes.length/itemsPerPage) ; i++)
    {
        numberOfPages.push(i)
    }
    
    function showNextPageHandler(event){
        // console.log("event are",event);
        setCurrentPage(event.target.id)
        setActivePage(event.target.id)
    }

    let pages = numberOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showNextPageHandler} 
            className={pageNumber == activePage ? "activepage" : ""}>
                {pageNumber}
            </li>
        )
    })
    

    return (
        <section>
            <ul className="pagination flex">
                {pages}
            </ul>
        </section>
    
   
  )
}

export default Pagination