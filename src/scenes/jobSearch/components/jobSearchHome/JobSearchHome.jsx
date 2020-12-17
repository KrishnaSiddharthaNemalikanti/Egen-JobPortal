import {isEmpty, isNil} from "lodash";
import React from "react"
import './JobSearchHome.css'
import {SearchBar} from "../searchBar/SearchBar";
import {JobTile} from "../jobTile/JobTile";
import {themeContext} from "../../JobSearch";

export const JobSearchHome = () => {
    const [queryString, setQueryString] = React.useState('');
    const [position, setPosition] = React.useState(null);
    const [searchResults, setSearchResults] = React.useState(null);

    const theme = React.useContext(themeContext)

    React.useEffect(() => navigator.geolocation.getCurrentPosition(function (pos) {
        setPosition(pos)
    }), []);

    const onSearch = React.useCallback(() => {
        let url = `https://jobs.github.com/positions.json?`;
        if (!isEmpty(queryString) && queryString.includes('location')) {
            url = `${url}${queryString}`;
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        } else if (!isNil(position)) {
            url = `${url}lat=${position.coords.latitude}&long=${position.coords.longitude}`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        }
    }, [queryString, position]);

    return (
        <div className={`JobSearchHome ${theme}`}>
            <SearchBar onChangeUrl={setQueryString} onSearch={onSearch}/>
            <div className={`JobSearchHome-JobContent`}>
                {
                    searchResults?.map(searchResult => <JobTile jobResult={searchResult}/>)
                }
            </div>
        </div>
    )
}
