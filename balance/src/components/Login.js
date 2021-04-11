import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {useState, useEffect} from 'react';
  import '../login.css'
  import SignIn from './SignIn'
  import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [email, setEmail] = useState();
    const [register, setRegister] = useState('');
    const [login, setLogin] = useState('');

 

    const sendData = (e) => {
        e.preventDefault()

        let userdata = {
          fname,
          lname,
          email,
          username,
          password
        }
        fetch('http://localhost:4000/user',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.auth == false){
          setRegister('Your missing some info, please try again.')
        }else if(data.auth == true){
            localStorage.setItem('token', true);
            window.location.replace("logic")
        }
        })
        .catch(err => {
          console.log('err',err);
        })
      }
      

      const findData = async (e) => {
    
        e.preventDefault();
 

        let userdata = {
          username,
          password,
        }

        fetch('http://localhost:4000/find',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.message == `Welcome ${username}`){
            localStorage.setItem('token', true);
           window.location.replace("logic")
          }else if (data.message == 'Not Found'){
              setLogin('Your username is not found, please try again or register.')
          }else if (data.message == 'Wrong password'){
              setLogin('Your password is incorrect.')
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
      return(

   <>
       <SignIn sendData={sendData} findData={findData} setPassword={setPassword} setUserName={setUserName} setEmail={setEmail} setlname={setlname} setfname={setfname} login={login} register={register}/>
    
   </>
    

      )

}

export default Login