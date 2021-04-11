
const LogOut = () => {
    const logOut = () =>{
        localStorage.setItem('token', false);
        window.location.replace('/')
      
      }
    return(
        <button className='logOut' onClick={logOut}>log out</button>
    )
}

export default LogOut