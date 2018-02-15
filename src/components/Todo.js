import React from 'react';

export default (props) => {

        let className = 'text';

        if (props.isFinished) {
            className += ' crossed' }

        return <ol>
            <li className={ className }>{ props.name }</li>
        </ol>

};
