import React from 'react'

const clearList = (items) => {
    items.length = 0
}

const ClearList = (props) => {
    return(
       <button onClick = {clearList(props.toDoListItems)}> Clear List </button>
    
    )
}

export default ClearList;