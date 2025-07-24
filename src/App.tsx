import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserList from './widgets/components/User_list';

const App = () => (
  <Routes>
    <Route path="/about" element={<div><h1>About</h1> <p>Cette application permet de gérer les utilisateurs.</p> </div>} />
    <Route path="/" element={<UserList />} />
  </Routes>
)

export default App
