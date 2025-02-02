import React from 'react'
import Title from './title'
import { useState,useEffect } from 'react'
import axios from 'axios'
const All = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, []); // empty dependency ensures it runs only once when the component mounts
  const completeTask = async (taskId) => {
    try {
        // Mark the task as completed in the backend
        await axios.put(`http://localhost:3000/tasks/${taskId}/complete`);
        
        // Update the state by filtering out the completed task
        setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
        console.error("Error completing task", error);
    }
};

  return (
    <div className='bg-white bg-opacity-75 h-[460px] w-[1100px] rounded-[20px] ml-[50px] mt-[50px]'>
      <Title />
      <div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className='flex'>
              <h3 className='ml-[61px] h1-jost text-[16px] mt-[21px] w-[85px] h-[19px]'>{task.name}</h3>
              <p className='ml-[33px] h1-jost text-[16px] mt-[21px] w-[218px] h-[46px] break-words'>{task.description}</p>
              <p className='ml-[52px] h1-jost text-[16px] mt-[21px] w-[120px] h-[23px]'>{task.category}</p>
              <p className='ml-[21px] h1-jost text-[16px] mt-[21px] w-[120px] h-[46px]'>{task.date}<br /><span className='ml-6'>{task.time}</span></p>
              <p className='ml-[44px] h1-jost text-[16px] mt-[21px] w-[110px] h-[23px]'>{task.priority}</p>
              <p className='ml-[30px] h1-jost text-[16px] mt-[21px] w-[110px] h-[23px]'>{task.fulfillment}</p>
              <img
                className="w-[20px] h-[20px] mt-5 cursor-pointer"
                src="./images/delete.png"
                alt="Complete"
                onClick={() => completeTask(task._id)}
              />
            </div>
          ))
        ) : (
          <p className='ml-[450px] mt-[150px] text-[30px]'>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default All;