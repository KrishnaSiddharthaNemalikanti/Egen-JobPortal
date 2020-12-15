import { render, screen } from '@testing-library/react';
import {JobTile} from './JobTile';
import React from "react";

test('renders job content in a job tile', () => {
    const jobRes = {
        id: "0bbcbdda-acf3-490a-9903-f3b711d0b8d8",
        type: "Full Time",
        url: "https://jobs.github.com/positions/0bbcbdda-acf3-490a-9903-f3b711d0b8d8",
        created_at: "Wed Dec 02 21:21:10 UTC 2020",
        company: "Canon Medical Research USA, Inc.",
        location: "Vernon Hills, IL (Chicago)",
        title: "Senior/Principal Embedded Software Engineer (CT)"
    }

    render(<JobTile jobResult={jobRes}/>);
    const companyElement = screen.getByText(/Canon Medical Research USA, Inc./i);
    expect(companyElement).toBeInTheDocument();
    const typeElement = screen.getByText(/Full Time/i);
    expect(typeElement).toBeInTheDocument();
});
