import { FETCH_REPO_ISSUES_REQUESTED, UPDATE_SEARCH_TEXT } from './constants';

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
