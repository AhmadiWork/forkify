import React from 'react';

import icons from '../../assets/img/icons.svg';

export default () => {
    return (
        <div className="loader">
            <svg>
                <use href={`${icons}#icon-cw`}/>
            </svg>
        </div>
    );
}