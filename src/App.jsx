import { Outlet } from "react-router-dom"
import Header from './components/Nav/Header'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
