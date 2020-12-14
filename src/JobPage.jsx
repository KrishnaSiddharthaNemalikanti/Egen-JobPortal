import React from "react"
import {useParams} from "react-router"
import './JobPage.css'

export function days_between(date) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const curr =  new Date()
    const differenceMs = Math.abs(curr - new Date(date));

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

}

export const JobPage = () => {
    const {id} = useParams()
    const [jobResult, setJobResult] = React.useState(null)
    let url = `https://jobs.github.com/positions/${id}.json`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setJobResult(res)
            })
    console.log(jobResult)
    return <div className="JobPage">
        <div className="JobPage-tile1">
            <img src={jobResult?.company_logo} className="JobPage-logo" alt="logo" />
            <p className="JobPage-company">{jobResult?.company}</p>
            <a href={jobResult?.company_url}>Company Site</a>
        </div>

        <div className="JobPage-tile2">
            <p className={`JobPage-type`}>{`${days_between(jobResult?.created_at)} days ago`} . {jobResult?.type}</p>
            <p className={`JobPage-title`}>{jobResult?.title}</p>
            <a href={jobResult?.url}>Apply Now</a>
            <div dangerouslySetInnerHTML={{ __html: jobResult?.description }} />
        </div>

        <div className="JobPage-tile3">
            <p className={`JobPage-howtoheader`}> How to apply</p>
            <div className={`JobPage-howtoapply`} dangerouslySetInnerHTML={{ __html: jobResult?.how_to_apply }} />
        </div>

    </div>
}