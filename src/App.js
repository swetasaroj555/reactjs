//import React , {useEffect,useState,useContext} from 'react'
//import { GlobalContext } from './context/GlobleContext'
import Feedd from './compnents/Feedd'
import SearchPage from './compnents/SearchPage'
import MessagePage from './compnents/MessagePage'
import Notification from './compnents/Notification'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from './compnents/HomePageLayout'
const App = () => {
 // const {UserName} = useContext(GlobalContext)
  //console.log("App.js" , UserName);
  /*const [count , setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      
      console.log("hello word");
      setCount(count+1)
      //console.log(count);

    },1000)
     },[count])*/


return(
      <Routes>
        <Route element={<HomePageLayout/>}>
       <Route index element={<Feedd />} />
     <Route path='/search' element={<SearchPage />} />
       <Route path='/notification' element={<Notification />} />
       <Route path='/message' element={<MessagePage />} />
       </Route>
      </Routes>
      )
} 
export default App
 
 
 
 
 
