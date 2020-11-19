import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../actions';

class FilmList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchFilms());
    }

    render() {
        return (
            <select size="10">
                { this.props.selectedFilms.map(film => {
                    let filmEntry = this.props.films.get(film.url);
                    return <option key={filmEntry.url} value={filmEntry.title}>
                        {filmEntry.title}
                    </option>
                }
                )};
            </select>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedPersonUrl: state.selectedPersonUrl,
        selectedFilms: state.selectedFilms,
        films: state.films
    }
}

export default connect(mapStateToProps)(FilmList);