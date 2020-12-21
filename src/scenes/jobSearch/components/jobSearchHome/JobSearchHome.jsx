import {isEmpty} from "lodash";
import React from "react"
import './JobSearchHome.css'
import {SearchBar} from "../searchBar/SearchBar";
import {JobTile} from "../jobTile/JobTile";
import {themeContext} from "../../JobSearch";

export const JobSearchHome = () => {
    const [queryString, setQueryString] = React.useState('');
//     const [position, setPosition] = React.useState(null);
    const [searchResults, setSearchResults] = React.useState(null);

    const theme = React.useContext(themeContext)

//     React.useEffect(() => navigator.geolocation.getCurrentPosition(function (pos) {
//         setPosition(pos)
//     }), []);

    React.useEffect(() => {
        let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setSearchResults(res)
            })
    }, []);

    const onSearch = React.useCallback(() => {
        let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
        if (!isEmpty(queryString)) {
            url = `${url}?${queryString}`
            // } else if (!isNil(position)) {
            //     url = `${url}lat=${position.coords.latitude}&long=${position.coords.longitude}`
            // }
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        } else {
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        }
    }, [queryString]);

    return (
        <div className={`JobSearchHome ${theme}`}>
            <SearchBar className="SearchBar" onChangeUrl={setQueryString} onSearch={onSearch}/>
            <div className={`JobSearchHome-JobContent`}>
                {
                    searchResults?.map(searchResult => <JobTile jobResult={searchResult}/>)
                }
            </div>
        </div>
    )
}
