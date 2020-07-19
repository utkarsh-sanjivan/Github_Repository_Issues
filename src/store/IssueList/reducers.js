import { 
    FETCH_REPO_ISSUES_REQUESTED,
    FETCH_REPO_ISSUES_SUCCESS,
    FETCH_REPO_ISSUES_FAILURE,
    UPDATE_SEARCH_TEXT,
    GET_COMMENTS_FOR_ISSUE_REQUESTED,
    GET_COMMENTS_FOR_ISSUE_SUCCESS,
    GET_COMMENTS_FOR_ISSUE_ERRORED,
    FETCH_SINGLE_ISSUE_REQUESTED,
    FETCH_SINGLE_ISSUE_SUCCESS,
    FETCH_SINGLE_ISSUE_FAILURE,
} from './constants';

const INITIAL_STATE = {
    searchText: '',
    issueListLoading: false,
    issueList: [],
    issueListError: false,
    commentListLoading: false,
    commentList: [],
    commentListError: false,
    issueLoading: false,
    issue: {},
    issueError: false,
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case FETCH_REPO_ISSUES_REQUESTED: {
            return {
                ...state,
                searchText: `${action.payload.user}/${action.payload.repo}`,
                issueListLoading: true,
                issueList: action.payload.page === 1? []: state.issueList,
                issueListError: false,
            };
        };

        case FETCH_REPO_ISSUES_SUCCESS: {
            return {
                ...state,
                issueListLoading: false,
                issueList: [ ...state.issueList, ...action.payload ],
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
        
        case GET_COMMENTS_FOR_ISSUE_REQUESTED:
            return {
                ...state,
                commentListLoading: true,
                commentList: [],
                commentListError: false,
            };

        case GET_COMMENTS_FOR_ISSUE_SUCCESS:
            return {
                ...state,
                commentListLoading: false,
                commentList: action.payload,
                commentListError: false,
            };

        case GET_COMMENTS_FOR_ISSUE_ERRORED:
            return {
                ...state,
                commentListLoading: false,
                commentList: [],
                commentListError: true,
            };

        case FETCH_SINGLE_ISSUE_REQUESTED:
            return {
                ...state,
                issueLoading: true,
                issue: {},
                issueError: false,
            };

        case FETCH_SINGLE_ISSUE_SUCCESS:
            return {
                ...state,
                issueLoading: false,
                issue: action.payload,
                issueError: false,
            };

        case FETCH_SINGLE_ISSUE_FAILURE:
            return {
                ...state,
                issueLoading: false,
                issue: {},
                issueError: true,
            };

        default: {
            return {
                ...state
            }
        }

    };
};