import React, { Component } from 'react';
import PersonSelector from './PersonSelector';
import FilmList from './FilmList';
import LatestFilm from './LatestFilm';

class MainPanel extends Component {

    render() {
        return (
            <div>
                <PersonSelector />
                <FilmList />
                <LatestFilm />
            </div>
        );
    }
}

export default MainPanel;

