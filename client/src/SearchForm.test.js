import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import SearchForm  from './SearchForm';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('input field is visible', () => {
    const { getByTestId } = render(<SearchForm/>)
    const searchInput = getByTestId("search-input")
    expect(searchInput).toBeVisible();
});

test('h1 is visible', () => {
    const { getByTestId } = render(<App/>)
    const header = getByTestId("header")
    expect(header).toBeVisible();
});

test('submit button is visible', () => {
    const { getByTestId } = render(<SearchForm/>)
    const button = getByTestId("button")
    expect(button).toBeVisible();
});