import '../signin.css'
import NavBar from './NavBar'
const SignIn = ({sendData,findData,setPassword,setUserName,setEmail,setlname,setfname,login,register}) =>{

return(
    <>
    <NavBar />
    <div className='logCont'>
    <form autocomplete='off' class='form'>
  <div class='control'>
    <h1>
      Sign In
    </h1>
    {login}
  </div>
  <div class='control block-cube block-input'>
    <input name='user' placeholder='Username' type='text' onChange={e => setUserName(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
  <div class='control block-cube block-input'>
    <input name='pass' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
  <button class='btn block-cube block-cube-hover' type='button' onClick={findData}>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
    <div class='text'>
      Log In
    </div>
  </button>

</form>


<form autocomplete='off' class='form'>
  <div class='control'>
    <h1>
      Register
    </h1>
    {register}
  </div>
  <div class='control block-cube block-input'>
    <input name='fname' placeholder='First Name' type='text' onChange={e => setfname(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>  
  <div class='control block-cube block-input'>
    <input name='lname' placeholder='Last Name' type='text' onChange={e => setlname(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>    <div class='control block-cube block-input'>
    <input name='email' placeholder='Email' type='text' onChange={e => setEmail(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>  
  <div class='control block-cube block-input'>
    <input name='user' id='user' placeholder='Username' type='text' onChange={e => setUserName(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
  <div class='control block-cube block-input'>
    <input name='pass' id='pass' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}/>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
  <button class='btn block-cube block-cube-hover' type='button' onClick={sendData}>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
    <div class='text'>
      Register
    </div>
  </button>

</form>
</div>
</>
)
}

export default SignIn