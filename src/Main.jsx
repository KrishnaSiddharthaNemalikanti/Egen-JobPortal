import {isEmpty, isNil} from "lodash";
import React from "react"
import './Main.css'
import {SearchBar} from "./SearchBar";
import {JobTile} from "./JobTile";

export const Main = () => {
    const [queryString, setQueryString] = React.useState('');
    const [position, setPosition] = React.useState(null);
    const [searchResults, setSearchResults] = React.useState(null);


    React.useEffect(() => navigator.geolocation.getCurrentPosition(function(pos) {
        setPosition(pos)
    }),[]);

   // const theme =  React.useMemo(() =>{
   //      localStorage.getItem("theme")
   //     },[localStorage]
   // )

    const onSearch = React.useCallback(() => {
        let url = `https://jobs.github.com/positions.json?`;
        if(!isEmpty(queryString) && queryString.includes('location')){
            url = `${url}${queryString}`;
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        }
        else  if(!isNil(position))
        {
            url = `${url}lat=${position.coords.latitude}&long=${position.coords.longitude}`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setSearchResults(res)
                })
        }
    },[queryString, position]);

    return (
        <div className={`Main light`}>
            <SearchBar onChangeUrl={setQueryString} onSearch={onSearch}/>
            <div className={`Main-JobContent`}>
                {
                    searchResults?.map(searchResult => <JobTile jobResult={searchResult}/>)
                }
            </div>
        </div>
    )
}