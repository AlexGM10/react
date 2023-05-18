import { useState } from 'react'
import { FrontPage } from './components/FrontPage'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { MainMenu } from './components/MainMenu'
import './App.css'

export function App() {
  const [view, setView] = useState("frontpage")

  
  function login(ev) {
    view == "login" ? setView("register") : setView("login")
  }

  function page(ev) {
    view == "frontpage" ? setView("mainmenu") : setView("frontpage")
  }


  
function renderView(ev) {
  switch (view) {
    case "frontpage":
      return <FrontPage />
      break;
    case "form":
      return <Form />
      break;
    case "register":
      return <Register />
      break;
    case "login":
      return <Login />
      break;
    case "mainmenu":
      return <MainMenu />
      break;

    default:
      break;
  }
}
  
  return (
  <>
    <div className="appContainer"> 
    {renderView()}
    </div>
    <button onClick={login}>Login/Register</button>
    <button onClick={page}>Page</button>
  </>
  ) 
}

