import './App.css';
import Users from "./components/userComponents/Users";
import {useEffect, useState} from "react";


const App = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers((users)))
    }, [])

  return (


      <div>
            <Users users={users}/>
      </div>
  );
}

export default App;
