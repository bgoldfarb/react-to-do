import React from 'react'
import './App.css';


const removeItem = (props,i) => {
    if(i > -1){
        props.handler(props.toDoListItems[i])
    }
}


const List = (props) => {
    return(
       props.toDoListItems.map((toDoListItems, i) => {
       return (
            <li key = {i}> {toDoListItems} 
              <button onClick={() => removeItem(props,i)} className='remove-item-btn'> X </button>
             </li> 
             
            )

       } 
    
    )

)
}

export default List;