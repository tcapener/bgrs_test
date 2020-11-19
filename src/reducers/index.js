import actionTypes from '../actions/actionTypes';

const defaultState = {
    selectedPersonUrl: "",
    selectedFilms: [],
    people: new Map(),
    films: new Map(),
    latestFilmTitle: "",
    latestFilmDate: ""
};

function getFilmsForPerson(state, personUrl) {
    let result = [];
    let person = state.people.get(personUrl);
    if(person) {
        result = person.films.map(url => {
            return state.films.get(url);
        });
    }
    return result;
}

export default function reducers(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.FETCH_PEOPLE_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionTypes.SELECT_PERSON: {
            const selectedFilms = getFilmsForPerson(state, action.payload.selectedPersonUrl);
            const lastFilm = selectedFilms[selectedFilms.length-1];
            return {
                ...state,
                selectedPersonUrl: action.payload.selectedPersonUrl,
                selectedFilms: selectedFilms,
                isLoading: false,
                latestFilmTitle: lastFilm.title,
                latestFilmDate: lastFilm.release_date
            }
        }
        case actionTypes.FETCH_PEOPLE_SUCCEEDED: {
            return {
                ...state,
                isLoading: false,
                people: action.payload.people
            }
        }
        case actionTypes.FETCH_FILMS_SUCCEEDED: {
            return {
                ...state,
                isLoading: false,
                films: action.payload.films
            }
        }
        default: {
            return state;
        }
    }
}