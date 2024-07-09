import React from 'react'
import Stories from './Stories'
import Posts from './Posts'


const Feedd = () => {
//const [count , setCount] = useState("0")
//const [love , setLove] = useState("0")

  return (
    <section className='mx-4'>
<main className= 'flex flex-col item-center gap-10 m-4 overflow-x-scroll'>
    
        {/*storoes */}

        <Stories/>
        </main>
        <Posts/>
  

   {/*<div className='flex flex-row justify-center items-center gap-x-6 mt-5'>
    <button  onClick = {()=>setCount(count-1)} className='px-4 py-4 bg-red-500 border-1 rounded-lg text-white'>- </button>
        <span className='text-3xl font-extrabold text-white'>{count}</span>
    <button  onClick ={()=>setCount(count+1)}className='px-4 py-4 bg-green-500 border-1 rounded-lg text-white'>- </button>
         </div>
         
         <div className='flex flex-row justify-center items-center gap-x-6   mt-5'>

            <button onClick ={()=>setLove(love-1)}className='px-4 py-4 bg-red-500 border-1 rounded-lg text-white'> love</button>
          <span className ='text-3xl font-extrabold text-white'>{love}</span>
            <button onClick ={()=>setLove(love+1)} className='px-4 py-4 bg-pink-500 border-1 rounded-lg text-green-500'> love</button>

  </div>*/}
         </section>
   
    
  )
}

export default Feedd