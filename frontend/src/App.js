import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UsersList from './components/UsersList';
import UpdateUser from './components/UpdateUser';
import UserForm from './components/UserForm';
import UserDelete from './components/UserDelete';
import Homepage from './components/homepage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="/add" element={<UserForm />} />
      <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>  );
}

export default App;
