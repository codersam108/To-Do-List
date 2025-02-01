import React, { useState } from 'react'
import Heading from './heading'
import All from './All'
import ToDo from './toDo'
import { use } from 'react'
const box = () => {
  const[toDo, setToDo] = useState(false);
  const[all, setAll] = useState(false);
  const[to,setTo]=useState(false);
  const[completed,setCompleted]=useState('');
  function clickedAll()
  {
    setAll(true);
    setTo(false);
    setCompleted(false);
  }
  function clickTo()
  {
    setTo(true);
    setAll(false);
    setCompleted(false);
  }
  function clickCompleted()
  {
    setCompleted(true);
    setAll(false);
    setTo(false);
  }
  function clicked()
  {
    setToDo(true);
    
  }
  return (
    <div className='w-[1200px] h-[770px] m-14 bg-white bg-opacity-65 rounded-[30px]'>
      <Heading />
     {toDo==false?
      <div>
      <button onClick={clicked} className='bg-white bg-opacity-75 h1-jost w-[450px] h-[60px] rounded-[20px] text-[24px] ml-[50px] mt-[42px]'>Add a new to-do</button>
      <button onClick={clickedAll} className={ `h1-jost text-[24px] w-[180px] h-[60px] rounded-[20px] ml-[20px] ${all?'bg-customBlue text-white':'bg-white bg-opacity-75'}`}>All</button>
      <button onClick={clickTo} className={ `h1-jost text-[24px] w-[180px] h-[60px] rounded-[20px] ml-[20px] ${to?'bg-customBlue text-white':'bg-white bg-opacity-75'}`}>To-do</button>
      <button onClick={clickCompleted} className={ `h1-jost text-[24px] w-[180px] h-[60px] rounded-[20px] ml-[20px] ${completed?'bg-customBlue text-white':'bg-white bg-opacity-75'}`}>Completed</button>
      </div>:null}
     {toDo?<ToDo/>:<All/>}
    </div>
  )
}

export default box
