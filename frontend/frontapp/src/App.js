import React, {useState} from 'react'
import './App.css';
import Login from './components/Login';
import Books from './components/Books';

function App() {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  var logginButton, booksButton, logoutButton

  const userLogin = (tok) => {
    setToken(tok);
  }

  const userPassName = (user) => {
    setUsername(user);
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  if (token === '') {
    logginButton = <Login userLogin={userLogin} userPassName={userPassName}/>;
  } else {
    logginButton = <div>You are logged <strong>{username}</strong></div>;
    booksButton = <Books token={token}/>;
    logoutButton = <a href="/" onClick={logout}>logout</a>
  }

  return (
    <div className="App">
        <h1>Main Page</h1>
        {logoutButton}
        {logginButton}
        {booksButton}
        
    </div>
  );
}

export default App;
