import "./styles.css";
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
export default function App() {

  const adminUser={
    userName: "admin",
    pwd: "admin"
  }

  const [user, setUser]=useState({name:"",pwd:""});
  const [error,setError]=useState("");

  const Login = details=>{
    console.log(details);

    if(details.name===adminUser.userName && details.password===adminUser.pwd){
      
      setUser({
        name:details.name,
        pwd:details.password
      });
    }
    else{
      setError("Details do not match!!");
    }
  }

  const Logout = ()=>{
    setUser({name:"",pwd:""});
  }

  return (
    <div className="App">
      {(user.name!== "") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}
