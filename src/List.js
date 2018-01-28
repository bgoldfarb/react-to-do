import React from 'react'

const List = (props) => {
    return(
       
       props.toDoListItems.map((toDoListItems, i) => <li key = {i}> {toDoListItems} </li> )
    
    )
}

export default List;