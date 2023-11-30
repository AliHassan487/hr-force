import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginPage/LoginForm'
import UserPage from './Pages/UserPage/UserPage'
import AdminPage from './Pages/AdminPage/AdminPage'
import ManagerPage from './Pages/ManagerPage/ManagerPage'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userType) => {
    setLoggedInUser(userType);
  };

  return (
    <>
       <div>
      {loggedInUser ? (
        <>
          {loggedInUser === 'user' && <UserPage />}
          {loggedInUser === 'admin' && <AdminPage />}
          {loggedInUser === 'manager' && <ManagerPage />}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
    </>
  )
}

export default App
