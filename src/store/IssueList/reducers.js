import { 
    FETCH_REPO_ISSUES_REQUESTED,
    FETCH_REPO_ISSUES_SUCCESS,
    FETCH_REPO_ISSUES_FAILURE,
} from './constants';

const INITIAL_STATE = {
    issueListLoading: false,
    issueList: [],
    issueListError: false,
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case FETCH_REPO_ISSUES_REQUESTED: {
            return {
                ...state,
                issueListLoading: true,
                issueList: [],
                issueListError: false,
            };
        };

        case FETCH_REPO_ISSUES_SUCCESS: {
            return {
                ...state,
                issueListLoading: false,
                issueList: action.payload,
                issueListError: false,
            };
        };

        case FETCH_REPO_ISSUES_FAILURE: {
            debugger;
            return {
                ...state,
                issueListLoading: false,
                issueList: [],
                issueListError: action.payload.status !== 404,
            };
        };

        default: {
            return {
                ...state
            }
        }

    };
};