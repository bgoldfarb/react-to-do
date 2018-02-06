import React from 'react'
import './App.css';

 

const removeItem = (props,i) => { (i > -1) ? props.handler(props.toDoListItems[i]) : console.log("Nothing to remove")}

const moveToComplete = (props, i) => (i > -1) ?  props.moveToComplete(props.toDoListItems[i]) : console.log("...")

const List = (props) => {
    return(
       props.toDoListItems.map((toDoListItems, i) => {
       return (
            <ol key = {i}> {`${i+1}. `} {toDoListItems}  
              <button onClick={() => removeItem(props,i)} className='remove-item-btn'> X  </button>
              <button  onClick={() => moveToComplete(props,i)} className='move-item-done'> ✓ </button>
             </ol> 
            )
       } 
    )
)
}

export default List; 