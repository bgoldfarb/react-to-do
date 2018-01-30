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
            <ol key = {i}> {`${i+1}. `} {toDoListItems} 
              <button onClick={() => removeItem(props,i)} className='remove-item-btn'> X </button>
             </ol> 
             
            )

       } 
    
    )

)
}

export default List;