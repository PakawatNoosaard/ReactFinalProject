import Sidebar from "./Components/Sidebar";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch as Switching, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const[theme, setTheme] = useState('dark-theme')
  const[checked, setChecked] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  },[theme])

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    } else
    {
       setTheme('light-theme')
       setChecked(true)
    }
  }

  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>

        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch 
            value=""
            checked={checked}
            inputProps={{'arial-label':''}}
            size="medium"
            onClick={themeToggler}/>

          </div>
        </div>

      <Switching>
        <Route path="/" exact><HomePage /></Route>
        <Route path="/about" exact><AboutPage /></Route>
        <Route path="/resume" exact><ResumePage /></Route>
        <Route path="/portfolio" exact><PortfolioPage /></Route>
      </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: var(--background-dark-grey); */
`;

export default App;
