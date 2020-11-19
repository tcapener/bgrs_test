import axios from 'axios';

const BASE_URL='https://swapi.dev/';
const API_URL='api/';
const PEOPLE_API='people/';
const FILMS_API='films/';

const apiClient = axios.create({
    baseURL: BASE_URL + API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export function fetchPeople() {
    return apiClient.get(PEOPLE_API);
}

export function fetchFilms() {
    return apiClient.get(PEOPLE_API);
}