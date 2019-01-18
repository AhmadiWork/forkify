export default (state = {}, action) => {
    const {type} = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store whether a request is happening at the moment or not
        // e.g. will be true when receiving FETCH_RECIPES_REQUEST
        //      and false when receiving FETCH_RECIPES_SUCCESS / FETCH_RECIPES_FAILURE
        [requestName]: requestState === 'REQUEST',
    };
};