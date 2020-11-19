import React, { Component } from 'react';
import { connect } from 'react-redux';

class LatestFilm extends Component {
    render() {
        let date = new Date(this.props.latestFilmDate);
        return (
            <div className="latest-film">
                {isNaN(date.getFullYear()) ? "" : (
                        <span>{this.props.latestFilmTitle} {date.getFullYear()}</span>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        latestFilmTitle: state.latestFilmTitle,
        latestFilmDate: state.latestFilmDate
    }
}

export default connect(mapStateToProps)(LatestFilm);