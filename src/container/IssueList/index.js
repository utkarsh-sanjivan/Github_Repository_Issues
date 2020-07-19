import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { CloseCircleOutlined, LeftOutlined } from '@ant-design/icons';
import * as IssueListActions from './../../store/IssueList/actions';
import notify from '../../component/Notification';
import InputField from '../../component/InputField';
import TableDetails from '../../component/TableDetails';
import localStore from './../../utils/localStorage';
import './style.css';

class IssueList extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      issueList: this.props.issueList.issueList || [],
      pageNumber: 1,
    };
  }

  componentDidMount () {
    if (this.props.issueList.issueList.length === 0 && !this.props.issueList.issueListLoading) {
      const { user, repo } = localStore.getItem('searchParams');
      this.props.issueListActions.fetchRepoIssues({ user, repo, page: 1 });
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.issueList.issueList.length !== this.props.issueList.issueList.length ) {
      const pageNumber = this.state.pageNumber;
      this.setState({ issueList: this.props.issueList.issueList }, () => {
        if (this.props.issueList.issueList.length === 30) {
          const { user, repo } = localStore.getItem('searchParams');
          this.props.issueListActions.fetchRepoIssues({ user, repo, page: this.state.pageNumber+1 });
        };
      });
    }
    if (
      prevProps.issueList.issueListError !== this.props.issueList.issueListError &&
      this.props.issueList.issueListError
    ) {
      notify({
        message: 'Internal Server Error',
        placement: 'topRight',
        icon: <CloseCircleOutlined twoToneColor='red' className='notification-icon'/>,
      });
    }
  }
  
  render () {
    return (
      <div className="issue-list-wrapper">
        <div>
          <div className="issue-list-back-div" onClick={() => this.props.history.push('/')}>
            <LeftOutlined style={{ marginRight: '5px' }}/> Go Back
          </div>
        </div>
        <InputField 
          loading={this.props.issueList.issueListLoading}
          onPressEnter={event => {
            const value = event.target? event.target.value: event
            if (value.split('/').length>1) {
              const user = value.split('/')[0];
              const repo = value.split('/')[1];
              localStore.setItem('searchParams', { user, repo });
              this.setState({ pageNumber: 1 })
              this.props.issueListActions.fetchRepoIssues({ user, repo, page: 1 });
              this.props.history.push('/issue-list');
            } else {
              notify({
                message: 'Please type in user/repo format',
                placement: 'topRight',
                icon: <CloseCircleOutlined twoToneColor='red' className='notification-icon'/>,
              });
            }
          }}
          onChange={event => {
            this.props.issueListActions.updateSeatcText(event.target.value);
          }}
          value={this.props.issueList.searchText}
        />
        <TableDetails 
          current={this.state.pageNumber}
          dataSource={this.state.issueList}
          loading={this.props.issueList.issueListLoading}
          onChange={this.onHandleChangeTable}
        />
      </div>
    );
  }

  onHandleChangeTable = (pagination, filters, sorter) => {
    debugger;
    if (Object.keys(sorter).length>0) {
      this.setState({
        sortOrder: sorter,
      });
    }

    if (Object.keys(pagination).length>0) {
      this.setState({
        pageNumber: pagination.current,
      }, () => {
        if (pagination.current*30 === this.props.issueList.issueList.length) {
          const { user, repo } = localStore.getItem('searchParams');
          this.props.issueListActions.fetchRepoIssues({ 
            user,
            repo,
            page: this.state.pageNumber+1,
          });
        }
      });
    };
  }
}

const mapStateToProps = ( store ) => ({
    issueList: store.issueList,
});

function mapDispatchToProps(dispatch) {
    return {
      issueListActions: bindActionCreators(IssueListActions, dispatch),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(IssueList);
