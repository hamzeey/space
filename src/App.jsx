import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Destination from './Components/Destination/Destination'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'


function App() {


  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
