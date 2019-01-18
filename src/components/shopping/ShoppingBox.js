import React from 'react';

import ShoppingItem from './ShoppingItem';

export default () => {
    return (
        <div className="shopping">
            <h2 className="heading-2">My Shopping List</h2>
            <ul className="shopping__list">
                <ShoppingItem/>
            </ul>
            <div className="copyright">
                © by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com" target="_blank" rel="noopener noreferrer" className="link">Food2Fork.com</a>.
            </div>
        </div>
    );
}