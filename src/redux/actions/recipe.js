import {recipesApi} from "../../config/api";

import {
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE
} from "./types";

export const fetchRecipes = query => async dispatch => {
    dispatch({type: FETCH_RECIPES_REQUEST});

    try {
        const res = await recipesApi.get('/search', {
            params: {
                q: query
            }
        });

        dispatch({type: FETCH_RECIPES_SUCCESS, payload: res.data});
    } catch (e) {
        dispatch({type: FETCH_RECIPES_FAILURE, error: e.message});
    }
};