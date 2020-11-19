import React, { Component } from 'react';
import {fetchPeople, selectPerson} from "../actions";
import {connect} from "react-redux";

class PersonSelector extends Component {
    constructor(props) {
        super(props);
        this.onSelectPerson = this.onSelectPerson.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchPeople());
    }

    onSelectPerson() {
        this.props.dispatch(selectPerson(this.props.selectedPersonUrl));
    }

    render() {
        let people = Array.from(this.props.people.values());
        return (
            <div>
                <select value={this.props.selectedPersonUrl} onChange={this.onSelectPerson}>
                    <option key="XYZ">Select a person...</option>
                    { people.map(person => (
                        <option key={person.url}>{person.name}</option>
                    ))};
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        films: state.films,
        selectedPersonUrl: state.selectedPersonUrl
    }
}

export default connect(mapStateToProps)(PersonSelector);