import React from 'react'

const desc = () => {
  return (
    <div className='bg-white bg-opacity-75 h-[460px] w-[1100px] rounded-[20px] ml-[50px] mt-[50px] p-6'>
    <h1 className='text-2xl font-bold mb-4'>Welcome to the To-Do List App</h1>
    <p className='mb-4'>
      This application helps you manage your tasks efficiently. You can add new tasks, view all tasks, and track completed tasks with ease.
    </p>
    <ul className='list-disc list-inside'>
      <li className='mb-2'>
        <strong>Add a new to-do:</strong> Click the <span className='text-blue-500'>To-Do</span> button to enter a new task. Fill in the details and save it to keep track of your tasks.
      </li>
      <li className='mb-2'>
        <strong>View all tasks:</strong> Click the <span className='text-blue-500'>All</span> button to see a list of all your tasks. This view helps you keep an eye on everything you need to do.
      </li>
      <li className='mb-2'>
        <strong>Track completed tasks:</strong> Click the <span className='text-blue-500'>Completed</span> button to view tasks that you have completed. This helps you track your progress and stay motivated.
      </li>
     
      <li className='mb-2'>
        <strong>Mark a task as completed:</strong> Click the <span className='text-blue-500'>Complete</span> icon displayed as delete next to a task to mark it as completed. This moves the task to the completed tasks list.
      </li>
    </ul>
  </div>
  )
}

export default desc
