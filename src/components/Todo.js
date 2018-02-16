import React from 'react';

export default (props) => {
        willReceiveProps() {

    }
        let className = 'text';

        if (props.isFinished) {
            className += ' crossed' }

        return <React.Fragment>
            <ul>
                <li className={ className }>{ props.name }</li>
            </ul>
        </React.Fragment>
};
