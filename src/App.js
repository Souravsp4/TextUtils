import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(messege,type)=>{
    setalert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


 const  toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#5a5876';
  showAlert("dark mode has been enabled", "success");
  document.title="TextUtils - Dark mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled", "success");
  document.title="TextUtils - Light mode";

  }
  }
  return (






     

// below without router

    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  />
        
      </div>

      {/* <About /> */}
      {/* <Navbar/> */}

    </div>
  );
  }
export default App;
