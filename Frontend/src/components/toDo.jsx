import React from 'react'
import { useState } from 'react'
const toDo = () => {
    const [formData,setFormData] = useState({
        name:'',
        description:'',
        category:'',
        date:'',
        time:'',
        priority:'',
        fulfillment:50,
    });
    function change(event)
    {
        const {name,value}=event.target;
        setFormData(prevFormData=>({
            ...prevFormData,
            [name]:value
        }));
    }
     const saveTask=async()=>{
        try{
            await axios.post("http://localhost:3000/tasks",formData);
            alert("Task saved successfully");
        }
        catch(error)
        {
            console.error("Error saving task",error);
        }
     }
    
    
  return (
    <>
    <div className='w-[1100px] h-[529px] bg-white rounded-[20px] pt-[30px] mt-[20px] ml-[50px] pl-[50px]'>
                <h1 className='h1-jost text-[32px] w-[234px] h-[46px]'>Add a new to-do:</h1>
                <form className='mt-[30px] flex flex-col md:flex-row'>
                    <div className='flex-1'>
                        <div>
                            <label className='h1-jost text-[24px] mr-[96px] '>Name:</label>
                            <input onChange={change} type="text" name="name" id="" value={formData.name} placeholder='name for the task you"re going to do' className='w-[330px] h-[33px] border-solid border-2 border-black mb-[33px]' />
                        </div>
                        <div>
                            <label className='h1-jost text-[24px] mr-[42px]'>Description:</label>
                            <textarea onChange={change} name="description" id="" value={formData.description} placeholder='a short description of the task - can be omitted' className='w-[330px] h-[90px] border-solid border-2 border-black mb-[33px] align-top resize-none' /></div>
                        <div>
                            <label className='h1-jost text-[24px] mr-[65px] mt-[88px]'>Category:</label>
                            <input onChange={change} type="text" name="category" id="" value={formData.category} placeholder='e.g. household, school, work' className='w-[330px] h-[33px] border-solid border-2 border-black' />
                        </div>
                        <div>
                            <label className='h1-jost text-[24px] mt-[31px] mr-[111px]'>Date:</label>
                            <input onChange={change}  type="date" name="date" id="" value={formData.date} placeholder='dd/mm/yyyy -can be omitted' className='w-[330px] h-[33px] border-solid border-2 border-black mt-[33px]' />
                        </div>
                        <div>
                            <label className='h1-jost text-[24px] mt-[31px] mr-[109px]'>Time:</label>
                            <input onChange={change} type="time" name="time" id="" value={formData.time} placeholder='hh:mm - can be omitted' className='w-[330px] h-[33px] border-solid border-2 border-black mt-[33px]' />
                        </div>
                    </div>
                    <div className='flex-1 ml-auto mt-[20px] md:mt-0'>
                        <div>
                            <label className='h1-jost text-[24px] ml-[50px] mr-[46px] '>Priority:</label>
                            <input onChange={change} type="text" name="priority" id="" value={formData.priority} placeholder='e.g. high, medium, low' className='w-[330px] h-[33px] border-solid border-2 border-black mb-[33px]' />
                        </div>
                        <div>
                            <label className='h1-jost text-[24px] ml-[50px] mr-[14px] mb-[30px]'>Fulfillment:</label>
                            <input onChange={change} type="range" name="fulfillment" id="" value={formData.fulfillment} className='w-[330px] h-[33px] border-solid border-2 border-black mt-[34px]' />
                        </div>
                         <button onClick={saveTask} type="submit" className='mt-[155px] h1-jost bg-customBlue w-[215px] h-[60px] text-[24px] text-white rounded-[20px] ml-[54px]'>Save</button>
                         <button type="button" className='border-2 border-black w-[215px] h-[60px] rounded-[20px] ml-[21px] h1-jost'>Cancel</button>
                    </div>
                   
                </form>
            </div>
    </>
  )
}

export default toDo
