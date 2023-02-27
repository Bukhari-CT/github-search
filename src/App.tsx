import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.less'
import HomeContainer from "./container/HomeContainer";
import GuestRoute from "./routes/GuestRoute";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestRoute element={HomeContainer}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
