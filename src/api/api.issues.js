import axios from './../utils/axios';

export async function fetchRepoIssuesAPI(params) {
  const url = `/repos/${params.user}/${params.repo}/issues?page=${params.page}&state=all`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data.map(issue => ({
      ...issue,
      key: issue.id,
      raisedBy: issue.user.login,
      open: issue.state === 'open',
    }));
  }
  debugger;
  throw response.status;
}

export async function getCommentsForIssueAPI(params) {
  const url = `/repos/${params.user}/${params.repo}/issues/${params.issue}/comments`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  throw response.status;
}

export async function fetchSinglessueAPI(params) {
  const url = `/repos/${params.user}/${params.repo}/issues/${params.issue}`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  throw response.status;
}
