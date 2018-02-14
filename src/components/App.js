import React from 'react';
import '../css/styles.css';

export default class extends React.Component {

    state = [
                { name: 'Buy a beer', isFinished: false },
                { name: 'Wash my armpits', isFinished: false },
                { name: 'Shave bikini surroundings', isFinished: false },
                { name: 'Look for mistakes in LOTR Trilogy', isFinished: false }
    ];

    render() {

        return  <React.Fragment>
            { this.state[0].name }
                </React.Fragment>
    }
}

