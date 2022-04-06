import React , {useState} from 'react';
import './style.css';
import UserProfile from './components/UserProfile';
import UserContext from './contexts/UserContext'

function App() {
  // create method toggleStatus that will change the status value from true to false. keep in mind that this method has to be created before our state!
  const toggleStatus = ()=> {
    setStatus(!status)
  }
  // create 2 properties for state: status (boolean) and toggle (toggleStatus method previously created)
  const [status, setStatus] = useState(true)

  return (
    // pass the whole state to the provider as a value
    <UserContext.Provider value={{
      status: status,
      toggleStatus: toggleStatus
    }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
