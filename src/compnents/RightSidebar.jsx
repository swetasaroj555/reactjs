import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'
import { SUGGESTED_ACCOUNT_DATA } from '../constants/Suggested_account'

const RightSidebar = () => {
  return (
    
     
    <aside className="hidden md:flex bg-black px-4 py-10 flex-col justify-between border-r min-w-[16rem]">  
    
        <div className='flex flex-col gap-11'>
            {/*account*/}
            <Profile fullName={"Sigma Developer"}
            username={"sigma_developer"}/>
            {/*suggested user*/}
<div className='flex flex-col gap-4'>
    <div className='flex flex-row justify-between items-center'>
        <span className='text-white font-bold '>Suggested Account</span>
        <span className='text-blue-500 font-bold'>See All</span>
        
    </div>

{SUGGESTED_ACCOUNT_DATA.map((account)=>(
    <SuggestedProfile 
    key={account.id}
    Fullname={account.FullName}  
    type={account.type}
    profilepic={account.profilePic}

    />
))}
<span><p className='text-gray-600 font-thin text-sm mt-2'>AboutHelp.Press.API.Jobs.Privacy.Terms.Locations
Language.Meta Verified
© 2024 INSTAGRAM FROM META</p></span>

 

</div>
        </div>
    </aside>
    
  )
}

export default RightSidebar