import {
  useState
} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/////////
import DefaultLayout from './Layout/DefaultLayout'
import AuthLayout from './Layout/AuthLayout'

////////////
import Nav from './Part/Nav/Nav'
import Hero from './Pages/Hero/Hero'
import Footer from './Part/Footer/Footer'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
///items 
import Item from './Pages/Item/Item'


function App() {
  const [count,
    setCount] = useState(0)

  return (
    <>


      <DefaultLayout>
        <Router>
          <Routes>


     <Route path="/" element={<Hero />} />
     <Route path="/item" element={<Item />} />
            
        


   <Route path="/auth" element={<AuthLayout />}>
      <Route path="signup" element={<SignUp />} />
    <Route path="login" element={<Login />} />
   </Route>






          </Routes>
        </Router>
      </DefaultLayout>
    </>
  )
}

export default App