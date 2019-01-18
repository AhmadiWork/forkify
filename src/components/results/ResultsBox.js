import React from 'react';
import {connect} from 'react-redux';

import {FETCH_RECIPES} from "../../redux/actions/types";
import {createLoadingSelector} from "../../redux/selectors/api";
import Spinner from '../base/Spinner';
import ResultItem from './ResultItem';

class ResultsBox extends React.Component {
    renderResultItem = () => {
        return this.props.results.map(item => {
            return <ResultItem key={item['recipe_id']} item={item}/>;
        });
    };

    render() {
        if (this.props.isLoading) {
            return <Spinner/>
        } else {
            return (
                <div className="results">
                    <ul className="results__list">
                        {this.renderResultItem()}
                    </ul>
                    <div className="results__pages">
                        {/*<button class="btn-inline results__btn--prev">
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-left"></use>
                        </svg>
                        <span>Page 1</span>
                    </button>
                    <button class="btn-inline results__btn--next">
                        <span>Page 3</span>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>
                    </button>*/}
                    </div>
                </div>
            );
        }
    }
}

const loadingSelector = createLoadingSelector([FETCH_RECIPES]);

const mapStateToProps = state => {
    return {
        results: Object.values(state.recipe.list),
        isLoading: loadingSelector(state)
    }
};

export default connect(mapStateToProps)(ResultsBox);