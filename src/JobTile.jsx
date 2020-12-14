import React from "react";
import './JobTile.css';
export const JobTile = ({jobResult}) => {
    return(
        <div className="JobTile">
            <img src={jobResult.company_logo} className="JobTile-logo" alt="logo" />
            <p className="JobTile-type">{jobResult.created_at} . {jobResult.type}</p>
            <p className="JobTile-title">{jobResult.title}</p>
            <p className="JobTile-company">{jobResult.company}</p>
            <p className="JobTile-location">{jobResult.location}</p>
        </div>
    )
}