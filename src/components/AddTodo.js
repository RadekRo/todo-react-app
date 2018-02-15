import React from 'react';

export default class extends React.Component {

    state = {
        currentInputValue: ''
    };

    onInputChange = (e) => {
        this.setState({
            currentInputValue: e.target.value
        })
    };

    render() {

        return (<React.Fragment>
            <input type="text"
                onChange={this.onInputChange}/>
            <button>Add</button>
        </React.Fragment>)

    }
};