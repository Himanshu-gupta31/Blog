import { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/Auth'
import { login,logout } from './store/authslice'
import { Footer, Header } from './components'

function App() {
  
 const [loading,SetLoading]=useState(true)
 const dispatch= useDispatch()
 useEffect(()=>{
  authService.getCurrentuser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>SetLoading(false))
  
 },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>    
      </div>
    </div>
):null
}

export default App
