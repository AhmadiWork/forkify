import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import error from './error';
import loading from './loading';
import recipe from './recipe';

export default combineReducers({
    form: formReducer,
    recipe,
    loading,
    errorMessage: error
});