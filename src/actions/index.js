import * as api from '../api';
import actionTypes from './actionTypes';

export function selectPerson(selectedPersonUrl) {
    return {
        type: actionTypes.SELECT_PERSON,
        payload: { selectedPersonUrl }
    };
}

function convertResponseToPeople(rawData) {
    const results = new Map();
    rawData.results.forEach(person => {
        results.set(person.url, { url: person.url,
                                  name: person.name,
                                  films: person.films } );
    });
    return results;
}

function convertResponseToPeople1(rawData) {
    return rawData.results.map(person => {
        return {url: person.url, name: person.name, films: person.films};
    });
}

export function fetchPeopleSucceeded(people) {
    return {
        type: actionTypes.FETCH_PEOPLE_SUCCEEDED,
        payload: { people }
    };
}

export function fetchPeople() {
    return dispatch => {
        api.fetchPeople()
            .then(response => {
                dispatch(fetchPeopleSucceeded(
                    convertResponseToPeople(response.data)));
            });
    };
}

function convertResponseToFilms(rawData) {
    const results = new Map();
    rawData.results.forEach(film => {
        results.set(film.url, { title: film.title,
                               release_date: film.release_date } );
    });
    return results;
}

export function fetchFilmsSucceeded(films) {
    return {
        type: actionTypes.FETCH_FILMS_SUCCEEDED,
        payload: { films }
    };
}

export function fetchFilms() {
    return dispatch => {
        api.fetchFilms()
            .then(response => {
                dispatch(fetchFilmsSucceeded(
                    convertResponseToFilms(response.data)));
            });
    };
}