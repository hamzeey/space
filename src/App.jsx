import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Destination from './Components/Destination/Destination'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'
import Moon from './Components/Destination/Moon'
import Mars from './Components/Destination/Mars'
import Titan from './Components/Destination/Titan'
import Europa from './Components/Destination/Europa'


function App() {


  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/destination' element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path='moon' element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='titan' element={<Titan />} />
          <Route path='europa' element={<Europa />} />
        </Route>
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
