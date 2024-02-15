import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function ListTask() {
    const data=useSelector(state=>state.Todo)
    console.log(data)
    return (
      <div className="listTask">
{  data.map((el)=><Task  el={el}  />)}
 
  
      </div>
      
    )
  }
  
export default ListTask
