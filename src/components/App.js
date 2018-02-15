import React from 'react';
import '../css/styles.css';

import ToDo from './Todo';

export default class extends React.Component {

    state = [
                { name: 'Buy a beer', isFinished: false },
                { name: 'Wash my armpits', isFinished: false },
                { name: 'Shave bikini surroundings', isFinished: false },
                { name: 'Look for mistakes in LOTR Trilogy', isFinished: false }
    ];

    render() {

        return  <React.Fragment>
                    <ToDo name={ this.state[0].name } isFinished={ this.state[0].isFinished }/>
                </React.Fragment>
    }
};

