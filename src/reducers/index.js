import actionTypes from '../actions/actionTypes';

const defaultState = {
    selectedPersonUrl: "",
    selectedFilms: [],
    people: new Map(),
    films: new Map()
};

function getFilmsForPerson(state, personUrl) {
    let result = [];
    let person = state.people.get(personUrl);
    if(person) {
        let result = person.films.map(url => state.films.get(url));
        console.log(result);
    }
    return result;
}

export default function reducers(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.SELECT_PERSON: {
            return {
                ...state,
                selectedPersonUrl: action.payload.selectedPersonUrl,
                selectedFilms: getFilmsForPerson(state, action.payload.selectedPersonUrl)
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