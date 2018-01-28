import React from 'react'
import './App.css';




const List = (props) => {
    return(
       props.toDoListItems.map((toDoListItems, i) => {
       return (
            <li key = {i}> {toDoListItems} 
              <button className='remove-item-btn'> X </button>

             </li> 
             
            )

       } 
    
    )

)
}

export default List;