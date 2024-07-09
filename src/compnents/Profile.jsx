import React from 'react'

const Profile = ({fullName , username}) => {
  return (
    <div className='flex flex-row justify-between item-center gap-4'>
        {/*div-left */}
        <div div className='flex flex-row justify-center item-center gap-3'>
            <img src="https://images.hdqwalls.com/wallpapers/mountain-scenery-morning-sun-rays-4k-kf.jpg" alt="nature" className='h-12 w-12 rounded-full' />
<div className='relative flex flex-col items-start justify-center'>
    <span className='text-white font-bold' >{fullName}</span>
    <span className='text-gray-500'>@{username}</span>
</div>
        </div>

<button className='bg-[#1c1e21] text-white px-4 py-2 w-13 rounded-md hover:bg-[#1c1e21]/50 '>Switch Account</button>
    </div>
  )
}
 
export default Profile