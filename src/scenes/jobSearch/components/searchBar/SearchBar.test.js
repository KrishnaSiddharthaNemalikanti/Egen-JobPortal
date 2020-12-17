import {render, screen} from '@testing-library/react';
import {SearchBar} from './SearchBar';
import React from "react";

test('renders learn react link', () => {
    render(<SearchBar onChangeUrl={() => {
    }} onSearch={() => {
    }}/>);
    const companyFilter = screen.getByPlaceholderText('Filter by title, company');
    expect(companyFilter).toBeInTheDocument();
    const locFilter = screen.getByPlaceholderText("Filter by location, default current location");
    expect(locFilter).toBeInTheDocument();
});
