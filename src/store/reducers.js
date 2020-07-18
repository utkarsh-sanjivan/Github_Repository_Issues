import { reducer as issueListReducer } from "./IssueList/reducers";
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  issueList: issueListReducer,
});
