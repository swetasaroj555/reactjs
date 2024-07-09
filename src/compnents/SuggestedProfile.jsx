import React from 'react'
const SuggestedProfile = ({profilepic,Fullname,type }) => {
  return (
    <div className='flex flex-row  justify-between item-center gap-4'>
        {/*div_left */}
        <div className='flex flex-row justify-center items-center gap-3'>
            <img 
            src={profilepic}
            alt="profile"
            className='h-8 w-8 rounded-full'/>
            <div className='relative flex flex-col items-start justify-center'>
                <span className='text-white font-bold text-sm '>{Fullname}</span>
                <span className='text-gray-500 text-xs '>{type}</span>
            </div>
           
        </div>
        {/*div_right */}
        <p className='text-sm font-bold text-blue-500'>Follow</p>
        

       
       </div>
   
  )
}

export default SuggestedProfile