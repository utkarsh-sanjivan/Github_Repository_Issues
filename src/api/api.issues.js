import axios from './../utils/axios';

export async function fetchRepoIssuesAPI(params) {
  const url = `/repos/${params.user}/${params.repo}/issues?page=${params.page}`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data.map(issue => ({
      key: issue.id,
      labels: issue.labels,
      title: issue.title,
      raisedBy: issue.user.login,
      open: issue.state === 'open',
      html_url: issue.html_url,
    }));
  }
  throw response.status;
}

