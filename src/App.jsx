import React from "react";
import './App.css';
import {Main} from './Main';
import { BrowserRouter as Router } from "react-router-dom"
import {Switch, Route}  from "react-router"
import {JobPage} from "./JobPage";
import {Checkbox} from "semantic-ui-react";

function App(props) {
    const [darkTheme,setDarkTheme] = React.useState(false);
    const onClickTheme = ()=>{
        localStorage.setItem("darkTheme", !darkTheme?"dark":"light")
        if(darkTheme)
        {
            setDarkTheme(false)
        }
        else
        {
            setDarkTheme(true)
        }
    }
  return (
      <div>
          <div className='App-header'>
              <p> devJobs </p>
              <Checkbox className= 'App-darkTheme-checkbox' label='dark theme' onClick={onClickTheme} />
          </div>
              <Router>
                  <Switch>
                      <Route path="/" component={Main} exact />
                      <Route
                          path={"/job/:id"}
                          component={JobPage}
                      />
                  </Switch>
              </Router>
      </div>
  )
}

export default App;
