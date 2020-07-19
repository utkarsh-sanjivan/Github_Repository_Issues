import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_REPO_ISSUES_REQUESTED,
    FETCH_REPO_ISSUES_SUCCESS,
    FETCH_REPO_ISSUES_FAILURE,
    GET_COMMENTS_FOR_ISSUE_REQUESTED,
    GET_COMMENTS_FOR_ISSUE_SUCCESS,
    GET_COMMENTS_FOR_ISSUE_ERRORED,
    FETCH_SINGLE_ISSUE_REQUESTED,
    FETCH_SINGLE_ISSUE_SUCCESS,
    FETCH_SINGLE_ISSUE_FAILURE,
} from './constants';
import {
    fetchRepoIssuesAPI,
    getCommentsForIssueAPI,
    fetchSinglessueAPI
} from '../../api/api.issues';

function* fetchRepoIssuesSaga(action) {
    try {
        const parameters = { ...action.payload };
        const responseBody = yield call(fetchRepoIssuesAPI, parameters);
        yield put({
            type: FETCH_REPO_ISSUES_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        if (err.request.status === 404) {
            yield put({
                type: FETCH_REPO_ISSUES_SUCCESS,
                payload: [],
            });
        } else {
            const payload = {
                status: err.request.status,
                message: err.message,
            }
            yield put({
                type: FETCH_REPO_ISSUES_FAILURE,
                payload,
            });
        }
    };
};

function* getCommentsForIssueSaga(action) {
    try {
        const parameters = { ...action.payload };
        const responseBody = yield call(getCommentsForIssueAPI, parameters);
        yield put({
            type: GET_COMMENTS_FOR_ISSUE_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_COMMENTS_FOR_ISSUE_ERRORED,
            payload,
        });
    };
};

function* fetchSingleIssueSaga(action) {
    try {
        const parameters = { ...action.payload };
        const responseBody = yield call(fetchSinglessueAPI, parameters);
        yield put({
            type: FETCH_SINGLE_ISSUE_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: FETCH_SINGLE_ISSUE_FAILURE,
            payload,
        });
    };
};

export default function* userSaga() {
    yield all([
        takeLatest(FETCH_REPO_ISSUES_REQUESTED, fetchRepoIssuesSaga),
        takeLatest(GET_COMMENTS_FOR_ISSUE_REQUESTED, getCommentsForIssueSaga),
        takeLatest(FETCH_SINGLE_ISSUE_REQUESTED, fetchSingleIssueSaga),
    ]);
};