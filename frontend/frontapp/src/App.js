import React, {useState} from 'react'
import './App.css';
import Login from './components/Login';
import Books from './components/Books';

function App() {

  const [token, setToken] = useState('')
  var logginButton, booksButton, logoutButton

  const userLogin = (tok) => {
    setToken(tok);
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  if (token === '') {
    logginButton = <Login userLogin={userLogin}/>;
  } else {
    logginButton = <div>You are logged</div>;
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
