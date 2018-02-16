import React from 'react';
import '../css/styles.css';

import ToDo from './Todo';
import AddTodo from './AddTodo';

export default class extends React.Component {

    state = {
        todos: [
            { name: 'Buy a beer', isFinished: false },
            { name: 'Wash my armpits', isFinished: false },
            { name: 'Shave bikini surroundings', isFinished: false },
            { name: 'Look for mistakes in LOTR Trilogy', isFinished: false }
        ]
    };



    render() {

        return  <React.Fragment>
                {this.state.todos.map((todo,idx) =>
                    <ToDo name={todo.name} isFinished={todo.isFinished} key={idx}/>)}
                <AddTodo/>
                </React.Fragment>
    }
};

