import { useState } from 'react';
import Signup from './scenes/Signup';
import Login from './scenes/Login';
import './App.css';


function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(); 
  return (
    <section>
      {!token
          ? isUser //if is a user show login, if not show sign up. Nested ternary. 
             ? <Login setToken={setToken} setIsUser={setIsUser} />
             : <Signup setToken={setToken} setIsUser={setIsUser} />
          : <h1>User List</h1>
      }
    </section>
  );
}

export default App;
