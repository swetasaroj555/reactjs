import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobleContext'
const Storee = ({avatar , username , iswatched}) => {
  const {UserName} = useContext(GlobalContext)
  console.log(UserName)
    
  
  return (
    <div className='flex flex-col item-center justify-center gap-2 cursor-pointer '>
      <img src={avatar} 
      alt="user profile"
      className={`h-18 w-18 rounded-full p-1 object-contai border-2 hover:scale-110 transition duration-200 ease-out ${
        iswatched ? "border-gray-400" : "border-red-500"} ${ username === "chris Taylor" && "border-green-600"}`}
      
      /> 
       <p className='text-xs w-14 truncate text-white'>{username}</p> 

    </div>
  )
}

export default Storee;




