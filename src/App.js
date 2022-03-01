import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'

import './App.css'

export default function App() {
  const [user, setUser] = React.useState(null)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  )
}


