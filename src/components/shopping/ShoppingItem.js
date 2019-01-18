import React from 'react';

export default () => {
    return (
        <li className="shopping__item">
            <div className="shopping__count">
                <input type="number" defaultValue={500} step={100} />
                <p>g</p>
            </div>
            <p className="shopping__description">Pasta</p>
            <button className="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross" />
                </svg>
            </button>
        </li>
    );
}