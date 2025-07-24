import './App.css'
import UserList from './widgets/components/Users-list'
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/about" element={<div><h1>About</h1> <p>Cette application permet de gérer les utilisateurs.</p> </div>} />
  </Routes>
)

export default App
