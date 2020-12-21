import React from "react";
import './JobSearch.css';
import {JobSearchHome} from './components/jobSearchHome/JobSearchHome';
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from "react-router"
import {JobPage} from "./components/jobPage/JobPage";
import Toggle from "react-toggle"
import "./toggle.css"
import sun from "../../images/sun.svg"
import moon from "../../images/moon.svg"

export const themeContext = React.createContext('light')

export const JobSearch = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const onClickTheme = () => {
        if (darkTheme) {
            setDarkTheme(false)
            document.body.classList.remove('dark');
        } else {
            setDarkTheme(true)
            document.body.classList.add('dark');
        }
    }
    return (
        <div className='JobSearch-main'>
            <div className='JobSearch-header'>
                <p className='JobSearch-title'> devJobs </p>
                <div className='JobSearch-toggle'>
                    <img className='sun' alt="light theme" src={sun}/>
                    <Toggle
                        defaultChecked={false}
                        className='JobSearch-darkTheme-checkbox'
                        onChange={onClickTheme}/>
                    <img className='moon' alt="dark theme" src={moon}/>
                </div>
                <themeContext.Provider value={darkTheme ? "dark" : "light"}>
                    <Router>
                        <Switch>
                            <Route path="/" component={JobSearchHome} exact/>
                            <Route
                                path={"/job/:id"}
                                component={JobPage}
                            />
                        </Switch>
                    </Router>
                </themeContext.Provider>
            </div>
        </div>
    )
}

export default JobSearch;
