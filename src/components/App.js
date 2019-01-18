import React from 'react';

import Header from './base/Header';
import ResultsBox from './results/ResultsBox';
import RecipeBox from './recipe/RecipeBox';
import ShoppingBox from './shopping/ShoppingBox';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <ResultsBox/>
                <RecipeBox/>
                <ShoppingBox/>
            </div>
        );
    }
}

export default App;