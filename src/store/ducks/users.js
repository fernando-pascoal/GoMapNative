/**
 * ACTION TYPES
 */

export const Types = {
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_ERROR: "GET_USER_ERROR",
    CHANGE_FORM_STATE: "CHANGE_FORM_STATE"
};

/**
 * ACTION CREATORS
 */

export const Creators = {
    getUserRequest: (username, coordinates) => ({
        type: Types.GET_USER_REQUEST,
        payload: { username, coordinates }
    }),

    getUserSuccess: user => ({
        type: Types.GET_USER_SUCCESS,
        payload: { user }
    }),
    getUserError: error => ({
        type: Types.GET_USER_ERROR,
        payload: { error }
    }),
    changeFormState: coordinates => ({
        type: Types.CHANGE_FORM_STATE,
        payload: { coordinates }
    })
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: "",
    formOpen: false,
    coordinates: [],
    username: ""
};

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                username: action.payload.username,
                coordinates: action.payload.coordinates
            };
        case Types.GET_USER_SUCCESS:
            const { data } = state;
            const { user } = action.payload;
            return {
                ...state,
                loading: false,
                formOpen: false,
                error: "",
                username: "",
                coordinates: "",
                data: [...data, user]
            };
        case Types.GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case Types.CHANGE_FORM_STATE:
            const coordinates = action.payload.coordinates
                ? action.payload.coordinates
                : [];
            return {
                ...state,
                coordinates,
                formOpen: !state.formOpen,
                username: ""
            };
        default:
            return state;
    }
}
