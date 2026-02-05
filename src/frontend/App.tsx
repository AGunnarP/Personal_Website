import './App.css'

import HomePage from "./HomePage.tsx"
import TutorPage from "./TutorPage.tsx"
import DeveloperPage from './DeveloperPage.tsx'
import Header from "./Header.tsx"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    
    <div className ="App_Container">

      

      <Router>

        <Header/>
        
        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/tutor" element={<TutorPage/>}/>
          <Route path="/developer" element={<DeveloperPage/>}/>

        </Routes>

      </Router>

    </div>
      

  )
}

export default App
