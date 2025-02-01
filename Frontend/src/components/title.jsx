import React from 'react'

const title = () => {
  return (
    <div className='flex'>
      <div className='h1-jost w-[41px] h-[35px] mr-[102px] ml-[78px] text-[24px]'>Task</div>
      <div className='h1-jost w-[116px] h-[35px] mr-[104px] text-[24px]'>Description</div>
      <div className='h1-jost w-[93px] h-[35px] mr-[65px] text-[24px]'>Category</div>
      <div className='h1-jost mr-[76px] h-[35px] w-[62px] text-[24px]'>When</div>
      <div className='h1-jost w-[72px] h-[35px] mr-[50px] text-[24px]'>Priority</div>
      <div className='h1-jost w-[104px] h-[35px] text-[24px]'>Fulfillment</div>
    </div>
  )
}

export default title
