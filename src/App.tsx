import './App.css'
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/about" element={<div><h1>About</h1> <p>Cette application permet de gérer les utilisateurs.</p> </div>} />
  </Routes>
)

export default App
