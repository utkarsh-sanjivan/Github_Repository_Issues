import { 
    FETCH_REPO_ISSUES_REQUESTED,
    UPDATE_SEARCH_TEXT,
    GET_COMMENTS_FOR_ISSUE_REQUESTED,
    FETCH_SINGLE_ISSUE_REQUESTED,
} from './constants';

export function fetchRepoIssues(payload) {
    return {
        type: FETCH_REPO_ISSUES_REQUESTED,
        payload,
    };
};
export function updateSeatcText(payload) {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload,
    };
};

export function getCommentsForIssue(payload) {
    return {
        type: GET_COMMENTS_FOR_ISSUE_REQUESTED,
        payload,
    };
}

export function fetchSingleIssue(payload) {
    return {
        type: FETCH_SINGLE_ISSUE_REQUESTED,
        payload,
    };
}
