// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name="<b> Uru </b>";
function App() {

  const [mode, setMode]=useState('light')              //whether dark mode is enabled or not

  const [alert, setAlert] =useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode= ()=> {
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#083c6f'
      showAlert("Dark mode has been enabled", 'success')
    }
    else{ 
     setMode('light')
     document.body.style.backgroundColor='white'
     showAlert("Light mode has been enabled", "success")
    }
  }

  return (         //jsx fragment which can return only 1 tag; jsx is html only in which class ~ className, for ~ htmlFor, tabindex ~ tabIndex
  <>
      {/* <div className="blank">Heyaaaa</div>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      
      </nav>
      <div className="container">
        <h1>Hellooo {name}</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quam veniam commodi nihil quas neque. Maiores est aperiam repudiandae! Amet, tenetur. Obcaecati quasi vel voluptatum asperiores, autem ipsum nemo ipsa rem provident iure quas.
        </p>
      </div> */}
  {/* <Navbar title="FirstProject" about="About"/>    */}
  {/* <Navbar /> */}
  <Navbar title="FirstProject" modeVar={mode} toggleVar={toggleMode}/>   
  <Alert alert={alert}/>
  <div className="container">
      <TextForm heading ="Enter your text" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
  </div>
  
             
  </>
  );
  
}

export default App;
