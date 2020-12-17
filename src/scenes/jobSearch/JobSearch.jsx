import React from "react";
import './JobSearch.css';
import {JobSearchHome} from './components/jobSearchHome/JobSearchHome';
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from "react-router"
import {JobPage} from "./components/jobPage/JobPage";
import {Checkbox} from "semantic-ui-react";

export const themeContext = React.createContext('light')

export const JobSearch = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const onClickTheme = () => {
        if (darkTheme) {
            setDarkTheme(false)
        } else {
            setDarkTheme(true)
        }
    }
    return (
        <div>
            <div className='JobSearch-header'>
                <p> devJobs </p>
                <Checkbox className='JobSearch-darkTheme-checkbox' label='dark theme' onClick={onClickTheme}/>
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
    )
}

export default JobSearch;
