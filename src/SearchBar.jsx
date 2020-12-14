import React from "react"
import {isEmpty} from "lodash"
import './SearchBar.css'

export const SearchBar = ({onChangeUrl}) => {
    const [searchParam , setSearchParam] = React.useState('')
    const [location , setLocation] = React.useState('')
    const [fullTimeBoolean , setFullTimeBoolean] = React.useState(false)

    const onValueChange = (textElement, setFn) => {
        setFn(textElement.target.value)
        onChangeUrl(formUrl())
    }

    const parse = (s)=>{
        return s.toLowerCase().replace(" ","+")
    }

    const formUrl = () => {
        var queryString = ''
        if(!isEmpty(location))
            queryString = `${queryString}location=${parse(location)}`
        if(!isEmpty(searchParam))
        {
            queryString = isEmpty(queryString)?queryString:`${queryString}&`
            queryString = `&${queryString}description=${parse(searchParam)}`
        }
        if(fullTimeBoolean) {
            queryString = isEmpty(queryString) ? queryString : `${queryString}&`
            queryString = `&${queryString}fullTime=true`
        }
        return `${queryString}`
    }

    return(
        <div className="SearchBar">
            <input className="SearchBar-searchParam" placeholder="Filter by title, company" value={searchParam} type='text' onChange={(textElement)=> onValueChange(textElement,setSearchParam)}/>
            <input className="SearchBar-location" placeholder="Filter by location" value={location} type='text' onChange={(textElement)=> onValueChange(textElement,setLocation)}/>
        </div>
    )
};