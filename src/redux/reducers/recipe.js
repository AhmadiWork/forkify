import _ from 'lodash';

import {
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    list: {},
    detail: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                list: _.mapKeys(action.payload['recipes'], 'recipe_id')
            };
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                detail: {...state.detail, ..._.mapKeys(action.payload, 'recipe_id')}
            };
        default:
            return state;
    }
};