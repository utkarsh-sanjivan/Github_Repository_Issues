import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_REPO_ISSUES_REQUESTED,
    FETCH_REPO_ISSUES_SUCCESS,
    FETCH_REPO_ISSUES_FAILURE,
} from './constants';
import { fetchRepoIssuesAPI } from '../../api/api.issues';

function* fetchRepoIssuesSaga(action) {
    try {
        const parameters = { ...action.payload };
        const responseBody = yield call(fetchRepoIssuesAPI, parameters);
        yield put({
            type: FETCH_REPO_ISSUES_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: FETCH_REPO_ISSUES_FAILURE,
            payload,
        });
    };
};

export default function* userSaga() {
    yield all([
        takeLatest(FETCH_REPO_ISSUES_REQUESTED, fetchRepoIssuesSaga),
    ]);
};