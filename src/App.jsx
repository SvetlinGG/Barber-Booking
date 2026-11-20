import Footer from "./components/Footer"
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  return (

    <>
    <Header />

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    <Footer />
    </>
  )
}
export default App


  
  

  