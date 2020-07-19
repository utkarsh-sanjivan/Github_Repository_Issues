import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Skeleton } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import * as IssueListActions from './../../store/IssueList/actions';
import StatusTag from './../../component/StatusTag/index';
import { formatDateString } from './../../utils/dateFormatter';
import CommentBox from './../../component/CommentBox/index';
import localStore from './../../utils/localStorage';
import './style.css';

class IssueDetails extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
        currentIssue: this.props.issueList.issueList.find(issue => issue.number.toString() === this.props.match.params.issueId),
        commentsList: [],
    };
  }

    componentDidMount() {
        const { user, repo } = localStore.getItem('searchParams');
        this.props.issueListActions.getCommentsForIssue({ user, repo, issue: this.props.match.params.issueId });
        if (!this.state.currentIssue) {
            this.props.issueListActions.fetchSingleIssue({ user, repo, issue: this.props.match.params.issueId });
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.issueList.commentList.length !== this.props.issueList.commentList.length &&
            this.props.issueList.commentList.length !== 0
        ) {
           this.setState({ commentList: this.props.issueList.commentList });
        }
        if (
            Object.keys(prevProps.issueList.issue).length !== Object.keys(this.props.issueList.issue).length &&
            Object.keys(this.props.issueList.issue).length !== 0
        ) {
           this.setState({ currentIssue: this.props.issueList.issue });
        }
    }
  
    render () {
        return (
        this.props.issueList.issueLoading?
            <Skeleton 
                className="details-skeleton"
                loading={true}
                active
            />
            : <div className="issue-details-wrapper">
                <div className="issue-details-title">{this.state.currentIssue && this.state.currentIssue.title}</div>
                <div className="issue-details-sub-title">
                    <StatusTag
                        color={this.state.currentIssue && this.state.currentIssue.state === 'open'? '#28a745': '#f50'}
                        icon={this.state.currentIssue && this.state.currentIssue.state === 'open'? 
                            <CheckOutlined twoToneColor='#28a745' />
                            : <CloseOutlined twoToneColor='#f50' />
                        }
                        text={this.state.currentIssue && this.state.currentIssue.state === 'open'? 'Open': 'Close'}
                    />
                    <span><b>{this.state.currentIssue && this.state.currentIssue.user.login}</b> openened this issue {this.state.currentIssue && formatDateString(this.state.currentIssue.created_at)}, {this.props.issueList.commentList.length} comments</span>
                </div>
                <div className="issue-details-description-container">
                    <CommentBox 
                        author={this.state.currentIssue && this.state.currentIssue.raisedBy}
                        avatar={this.state.currentIssue && this.state.currentIssue.user.avatar_url}
                        content={this.state.currentIssue && this.state.currentIssue.body}
                        datetime={this.state.currentIssue && ` commented ${formatDateString(this.state.currentIssue.created_at)}`}
                    />
                </div>
                <div className="tags-container">
                    {this.state.currentIssue && this.state.currentIssue.labels.map(value => (
                        <span 
                            style={{ 
                                backgroundColor: `#${value.color}`,
                                color: `${value.color === 'ffffff'? '#000000': '#ffffff'}`,
                                border: `${value.color === 'ffffff'? '#9ca2a8 1px solid': 'none'}`,
                            }}
                            className="issue-tag-card"
                        >
                            {value.name}
                        </span>
                        ))}
                </div>
                <div className="issue-details-comment-container">
                    { this.props.issueList.commentListLoading?
                        <Skeleton 
                            className="comments-skeleton"
                            loading={true}
                            active
                        />
                        : this.state.commentList && this.state.commentList.map(comment => (
                            <CommentBox 
                                author={comment.user.login}
                                avatar={comment.user.avatar_url}
                                content={comment.body}
                                datetime={` commented ${formatDateString(comment.created_at)}`}
                            />
                        ))
                    }
                </div>
            </div>
        );
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

export default  connect(mapStateToProps, mapDispatchToProps)(IssueDetails);
