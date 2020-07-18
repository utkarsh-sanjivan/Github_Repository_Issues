import { FETCH_REPO_ISSUES_REQUESTED } from './constants';

export function fetchRepoIssues(payload) {
    return {
        type: FETCH_REPO_ISSUES_REQUESTED,
        payload,
    };
};
