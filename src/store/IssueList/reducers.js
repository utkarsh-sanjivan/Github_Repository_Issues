import { 
    FETCH_REPO_ISSUES_REQUESTED,
    FETCH_REPO_ISSUES_SUCCESS,
    FETCH_REPO_ISSUES_FAILURE,
    UPDATE_SEARCH_TEXT,
} from './constants';

const INITIAL_STATE = {
    searchText: '',
    issueListLoading: false,
    issueList: [],
    issueListError: false,
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case FETCH_REPO_ISSUES_REQUESTED: {
            return {
                ...state,
                searchText: `${action.payload.user}/${action.payload.repo}`,
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
            return {
                ...state,
                issueListLoading: false,
                issueList: [],
                issueListError: action.payload.status !== 404,
            };
        };

        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };

        default: {
            return {
                ...state
            }
        }

    };
};