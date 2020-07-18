import { fork } from 'redux-saga/effects'
import issueList from './IssueList/sagas';

export default function* root() {
  yield fork(issueList);
}