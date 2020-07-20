(this.webpackJsonpgithub_repo_issues=this.webpackJsonpgithub_repo_issues||[]).push([[0],{217:function(e,t,s){e.exports=s(465)},222:function(e,t,s){},223:function(e,t,s){},228:function(e,t,s){},249:function(e,t,s){},261:function(e,t,s){},262:function(e,t,s){},357:function(e,t,s){},442:function(e,t,s){},443:function(e,t,s){},465:function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"fetchRepoIssues",(function(){return S})),s.d(a,"updateSeatcText",(function(){return g})),s.d(a,"getCommentsForIssue",(function(){return O})),s.d(a,"fetchSingleIssue",(function(){return v}));var r=s(0),n=s.n(r),i=s(29),c=s.n(i),u=(s(222),s(472)),o=s(473),l=s(474),p=(s(223),function(e){return n.a.createElement("div",{className:"issues-page-header-wrapper"},n.a.createElement("div",{className:"issues-page-header-title"},"/"===window.location.pathname?"Issue  Search":window.location.pathname.includes("issue-details")?"Issue Details":"Issue List"),n.a.createElement("div",{className:"issues-page-header-sub-title"},window.location.pathname.includes("issue-details")?null:"Search issues from a public repository of a user"))}),m=s(80),d=s(81),E=s(89),h=s(88),f=s(65),b=s(41),L=s(476);function S(e){return{type:"api/issueList/FETCH_REPO_ISSUES_REQUESTED",payload:e}}function g(e){return{type:"api/issueList/UPDATE_SEARCH_TEXT",payload:e}}function O(e){return{type:"api/issueList/GET_COMMENTS_FOR_ISSUE_REQUESTED",payload:e}}function v(e){return{type:"api/issueList/FETCH_SINGLE_ISSUE_REQUESTED",payload:e}}var y=s(26),_=s(471),I=(s(228),function(e){_.a.open(Object(y.a)({style:{marginLeft:20},duration:3,placement:"bottomLeft"},e))}),j=s(470),N=(s(249),j.a.Search),C=function(e){return n.a.createElement(N,Object.assign({},e,{onSearch:e.onPressEnter,placeholder:"username/repo",className:"issues-search-field",enterButton:"Search"}))},T=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t||JSON.stringify(null))}catch(s){return s}},R=function(e,t){try{return localStorage.setItem(e,JSON.stringify(t))}catch(s){return s}},x=(s(261),function(e){Object(E.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).state={},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"issue-search-wrapper"},n.a.createElement("div",{className:"issue-search-desc-text"},"Search Issues"),n.a.createElement(C,{onPressEnter:function(t){var s=t.target?t.target.value:t;if(s.split("/").length>1){var a=s.split("/")[0],r=s.split("/")[1];R("searchParams",{user:a,repo:r}),e.props.issueListActions.fetchRepoIssues({user:a,repo:r,page:1}),e.props.history.push("/Github_Repository_Issues/issue-list")}else I({message:"Please type in user/repo format",placement:"topRight",icon:n.a.createElement(L.a,{twoToneColor:"#ed3833",className:"notification-icon"})})}}),n.a.createElement("div",{className:"issue-search-desc-info"},"Type 'user/repo' to find the issues"))}}]),s}(n.a.PureComponent));var U=Object(f.b)((function(e){return{issueList:e.issueList}}),(function(e){return{issueListActions:Object(b.b)(a,e)}}))(x),w=s(477),k=s(467),F=s(469),P=s(59),A=s(468),G=(s(262),function(e){var t=[{title:"Labels",dataIndex:"labels",width:"300px",key:"labels",render:function(e,t){return n.a.createElement("div",{className:"table-label-cells"},e.map((function(e){return n.a.createElement("span",{style:{backgroundColor:"#".concat(e.color),color:"".concat("ffffff"===e.color?"#000000":"#ffffff"),border:"".concat("ffffff"===e.color?"#9ca2a8 1px solid":"none")},className:"table-issue-tag"},e.name)})))}},{title:"Title",dataIndex:"title",key:"title",render:function(e,t){return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){return window.open("/Github_Repository_Issues/issue-details/".concat(t.number),"_blank")},className:"issue-title-container"},e),n.a.createElement("div",{style:{backgroundColor:"".concat(t.open?"#28a745":"#f50")},className:"issue-sub-title-container"},t.open?"Open":"Close"))}},{title:"Raised By",dataIndex:"raisedBy",key:"raisedBy",render:function(e,t){return n.a.createElement("div",null,n.a.createElement(k.a,{src:t.user.avatar_url,className:"table-raisedby-avatar"}),n.a.createElement("span",{className:"issue-title-container"},e))}}];return n.a.createElement("div",{style:{marginTop:"25px"}},e.loading&&e.dataSource.length<31?n.a.createElement(F.a,{loading:!0,active:!0}):0===e.dataSource.length?n.a.createElement(P.a,{className:"table-empty-image",description:"No Issues Available"}):n.a.createElement(A.a,Object.assign({},e,{dataSource:e.dataSource,columns:t,pagination:{position:"bottom",defaultPageSize:30,current:e.current,showSizeChanger:!1}})))}),D=(s(357),function(e){Object(E.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).onHandleChangeTable=function(e,t,s){Object.keys(s).length>0&&a.setState({sortOrder:s}),Object.keys(e).length>0&&a.setState({pageNumber:e.current},(function(){if(30*e.current===a.props.issueList.issueList.length){var t=T("searchParams"),s=t.user,r=t.repo;a.props.issueListActions.fetchRepoIssues({user:s,repo:r,page:a.state.pageNumber+1})}}))},a.state={issueList:a.props.issueList.issueList||[],pageNumber:1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){if(0===this.props.issueList.issueList.length&&!this.props.issueList.issueListLoading){var e=T("searchParams"),t=e.user,s=e.repo;this.props.issueListActions.fetchRepoIssues({user:t,repo:s,page:1})}}},{key:"componentDidUpdate",value:function(e){var t=this;JSON.stringify(e.issueList.issueList)!==JSON.stringify(this.props.issueList.issueList)&&this.setState({issueList:this.props.issueList.issueList},(function(){if(30===t.props.issueList.issueList.length){var e=T("searchParams"),s=e.user,a=e.repo;t.props.issueListActions.fetchRepoIssues({user:s,repo:a,page:t.state.pageNumber+1})}})),e.issueList.issueListError!==this.props.issueList.issueListError&&this.props.issueList.issueListError&&I({message:"Internal Server Error",placement:"topRight",icon:n.a.createElement(L.a,{twoToneColor:"#ed3833",className:"notification-icon"})})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"issue-list-wrapper"},n.a.createElement("div",null,n.a.createElement("div",{className:"issue-list-back-div",onClick:function(){return e.props.history.push("/Github_Repository_Issues/")}},n.a.createElement(w.a,{style:{marginRight:"5px"}})," Go Back")),n.a.createElement(C,{loading:this.props.issueList.issueListLoading,onPressEnter:function(t){var s=t.target?t.target.value:t;if(s.split("/").length>1){var a=s.split("/")[0],r=s.split("/")[1];R("searchParams",{user:a,repo:r}),e.setState({pageNumber:1}),e.props.issueListActions.fetchRepoIssues({user:a,repo:r,page:1}),e.props.history.push("/Github_Repository_Issues/issue-list")}else I({message:"Please type in user/repo format",placement:"topRight",icon:n.a.createElement(L.a,{twoToneColor:"red",className:"notification-icon"})})},onChange:function(t){e.props.issueListActions.updateSeatcText(t.target.value)},value:this.props.issueList.searchText}),n.a.createElement(G,{current:this.state.pageNumber,dataSource:this.state.issueList,loading:this.props.issueList.issueListLoading,onChange:this.onHandleChangeTable}))}}]),s}(n.a.PureComponent));var H=Object(f.b)((function(e){return{issueList:e.issueList}}),(function(e){return{issueListActions:Object(b.b)(a,e)}}))(D),M=s(145),J=s.n(M),Q=s(478),B=s(479),q=s(475),z=(s(442),function(e){return n.a.createElement(q.a,Object.assign({},e,{closable:!1,className:"issue-status-tag"}),e.text)}),X=s(77),K=s.n(X);function V(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e]}function W(e){var t=K()(e),s=K()().months(),a=K()().year(),r=t.months(),n=t.year(),i=s===r,c=a===n;if(!c)return"on ".concat(t.date()," ").concat(V(r)," ").concat(n);if(c&&!i)return"on ".concat(t.date()," ").concat(V(r));if(c&&i){var u=K()().diff(t,"days");if(0===u){var o=K()().diff(t,"hour");if(0===o){var l=K()().diff(t,"minutes");return 0===l?" just now":" ".concat(l," ").concat(1===l?"minute":"minutes"," ago")}return" ".concat(o," ").concat(1===o?"hour":"hours"," ago")}return" ".concat(u," ").concat(1===u?"day":"days"," ago")}}s(443);var Y=function(e){Object(E.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).state={currentIssue:a.props.issueList.issueList.find((function(e){return e.number.toString()===a.props.match.params.issueId})),commentsList:[]},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=T("searchParams"),t=e.user,s=e.repo;this.props.issueListActions.getCommentsForIssue({user:t,repo:s,issue:this.props.match.params.issueId}),this.state.currentIssue||this.props.issueListActions.fetchSingleIssue({user:t,repo:s,issue:this.props.match.params.issueId})}},{key:"componentDidUpdate",value:function(e){JSON.stringify(e.issueList.commentList)!==JSON.stringify(this.props.issueList.commentList)&&this.setState({commentList:this.props.issueList.commentList}),e.issueList.issue.id!==this.props.issueList.issue.id&&e.issueList.issue.number!==this.props.issueList.issue.number&&this.setState({currentIssue:this.props.issueList.issue})}},{key:"render",value:function(){var e=this;return this.props.issueList.issueLoading?n.a.createElement(F.a,{className:"details-skeleton",loading:!0,active:!0}):n.a.createElement("div",{className:"issue-details-wrapper"},n.a.createElement("div",{className:"issue-details-title"},this.state.currentIssue&&this.state.currentIssue.title),n.a.createElement("div",{className:"issue-details-sub-title"},n.a.createElement(z,{color:this.state.currentIssue&&"open"===this.state.currentIssue.state?"#28a745":"#f50",icon:this.state.currentIssue&&"open"===this.state.currentIssue.state?n.a.createElement(Q.a,{twoToneColor:"#28a745"}):n.a.createElement(B.a,{twoToneColor:"#f50"}),text:this.state.currentIssue&&"open"===this.state.currentIssue.state?"Open":"Close"}),n.a.createElement("span",null,n.a.createElement("b",null,this.state.currentIssue&&this.state.currentIssue.user.login)," openened this issue ",this.state.currentIssue&&W(this.state.currentIssue.created_at),", ",this.props.issueList.commentList.length," comments")),n.a.createElement("div",{className:"issue-details-description-container"},n.a.createElement("div",{className:"issue-desc-header"},n.a.createElement(k.a,{src:this.state.currentIssue&&this.state.currentIssue.user.avatar_url,className:"issue-details-raisedby-avatar"}),n.a.createElement("span",{className:"issue-details-raisedby-description"},n.a.createElement("b",null,this.state.currentIssue&&this.state.currentIssue.user.login)," ",this.state.currentIssue&&" posted ".concat(W(this.state.currentIssue.created_at)))),n.a.createElement(J.a,{source:this.state.currentIssue&&this.state.currentIssue.body,className:"issue-details-description-content"})),n.a.createElement("div",{className:"tags-container"},this.state.currentIssue&&this.state.currentIssue.labels.map((function(e){return n.a.createElement("span",{style:{backgroundColor:"#".concat(e.color),color:"".concat("000"===e.color?"#fff":"#000"),border:"".concat("ffffff"===e.color?"#9ca2a8 1px solid":"none")},className:"issue-tag-card"},e.name)}))),n.a.createElement("div",{className:"issue-details-comment-container"},this.props.issueList.commentListLoading?n.a.createElement(F.a,{className:"comments-skeleton",loading:!0,active:!0}):this.state.commentList&&this.state.commentList.map((function(t){return n.a.createElement("div",{className:"issue-details-description-container"},n.a.createElement("div",{className:"issue-desc-header"},n.a.createElement(k.a,{src:t.user.avatar_url,className:"issue-details-raisedby-avatar"}),n.a.createElement("span",{className:"issue-details-raisedby-description"},n.a.createElement("b",null,t.user.login)," ",e.state.currentIssue&&" commented ".concat(W(t.created_at)))),n.a.createElement(J.a,{source:t.body,className:"issue-details-description-content"}))}))))}}]),s}(n.a.PureComponent);var Z=Object(f.b)((function(e){return{issueList:e.issueList}}),(function(e){return{issueListActions:Object(b.b)(a,e)}}))(Y),$=function(e){return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(u.a,null,n.a.createElement(o.a,null,n.a.createElement(l.a,{exact:!0,path:"/Github_Repository_Issues",component:U}),n.a.createElement(l.a,{exact:!0,path:"/Github_Repository_Issues/issue-list",component:H}),n.a.createElement(l.a,{exact:!0,path:"/Github_Repository_Issues/issue-details/:issueId",component:Z}))))},ee=s(120),te=s(207),se=s.n(te),ae=s(211),re=s(38),ne=s.n(re),ie=s(40),ce=s(125),ue=s(206),oe=s.n(ue).a.create({baseURL:"https://api.github.com/",headers:{"Content-Type":"application/json"}});function le(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(ce.a)(ne.a.mark((function e(t){var s,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/repos/".concat(t.user,"/").concat(t.repo,"/issues?page=").concat(t.page,"&state=all"),e.next=3,oe.get(s,{});case 3:if(a=e.sent,!(a.status>=200&&a.status<300)){e.next=7;break}return e.abrupt("return",a.data.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{key:e.id,raisedBy:e.user.login,open:"open"===e.state})})));case 7:throw a.status;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return de.apply(this,arguments)}function de(){return(de=Object(ce.a)(ne.a.mark((function e(t){var s,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/repos/".concat(t.user,"/").concat(t.repo,"/issues/").concat(t.issue,"/comments"),e.next=3,oe.get(s,{});case 3:if(a=e.sent,!(a.status>=200&&a.status<300)){e.next=7;break}return e.abrupt("return",a.data);case 7:throw a.status;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e){return he.apply(this,arguments)}function he(){return(he=Object(ce.a)(ne.a.mark((function e(t){var s,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/repos/".concat(t.user,"/").concat(t.repo,"/issues/").concat(t.issue),e.next=3,oe.get(s,{});case 3:if(a=e.sent,!(a.status>=200&&a.status<300)){e.next=7;break}return e.abrupt("return",a.data);case 7:throw a.status;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=ne.a.mark(ge),be=ne.a.mark(Oe),Le=ne.a.mark(ve),Se=ne.a.mark(ye);function ge(e){var t,s,a;return ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=Object(y.a)({},e.payload),r.next=4,Object(ie.b)(le,t);case 4:return s=r.sent,r.next=7,Object(ie.d)({type:"api/issueList/FETCH_REPO_ISSUES_SUCCESS",payload:s});case 7:r.next=19;break;case 9:if(r.prev=9,r.t0=r.catch(0),404!==r.t0.request.status){r.next=16;break}return r.next=14,Object(ie.d)({type:"api/issueList/FETCH_REPO_ISSUES_SUCCESS",payload:[]});case 14:r.next=19;break;case 16:return a={status:r.t0.request.status,message:r.t0.message},r.next=19,Object(ie.d)({type:"api/issueList/FETCH_REPO_ISSUES_FAILURE",payload:a});case 19:case 20:case"end":return r.stop()}}),fe,null,[[0,9]])}function Oe(e){var t,s,a;return ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=Object(y.a)({},e.payload),r.next=4,Object(ie.b)(me,t);case 4:return s=r.sent,r.next=7,Object(ie.d)({type:"api/issueList/GET_COMMENTS_FOR_ISSUE_SUCCESS",payload:s});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a={status:r.t0.request.status,message:r.t0.message},r.next=14,Object(ie.d)({type:"api/issueList/GET_COMMENTS_FOR_ISSUE_ERRORED",payload:a});case 14:case 15:case"end":return r.stop()}}),be,null,[[0,9]])}function ve(e){var t,s,a;return ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=Object(y.a)({},e.payload),r.next=4,Object(ie.b)(Ee,t);case 4:return s=r.sent,r.next=7,Object(ie.d)({type:"api/issueList/FETCH_SINGLE_ISSUE_SUCCESS",payload:s});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a={status:r.t0.request.status,message:r.t0.message},r.next=14,Object(ie.d)({type:"api/issueList/FETCH_SINGLE_ISSUE_FAILURE",payload:a});case 14:case 15:case"end":return r.stop()}}),Le,null,[[0,9]])}function ye(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([Object(ie.e)("api/issueList/FETCH_REPO_ISSUES_REQUESTED",ge),Object(ie.e)("api/issueList/GET_COMMENTS_FOR_ISSUE_REQUESTED",Oe),Object(ie.e)("api/issueList/FETCH_SINGLE_ISSUE_REQUESTED",ve)]);case 2:case"end":return e.stop()}}),Se)}var _e=ne.a.mark(Ie);function Ie(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.c)(ye);case 2:case"end":return e.stop()}}),_e)}var je=s(146),Ne={searchText:"",issueListLoading:!1,issueList:[],issueListError:!1,commentListLoading:!1,commentList:[],commentListError:!1,issueLoading:!1,issue:{},issueError:!1};function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"api/issueList/FETCH_REPO_ISSUES_REQUESTED":return Object(y.a)(Object(y.a)({},e),{},{searchText:"".concat(t.payload.user,"/").concat(t.payload.repo),issueListLoading:!0,issueList:1===t.payload.page?[]:e.issueList,issueListError:!1});case"api/issueList/FETCH_REPO_ISSUES_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{issueListLoading:!1,issueList:[].concat(Object(je.a)(e.issueList),Object(je.a)(t.payload)),issueListError:!1});case"api/issueList/FETCH_REPO_ISSUES_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{issueListLoading:!1,issueList:[],issueListError:404!==t.payload.status});case"api/issueList/UPDATE_SEARCH_TEXT":return Object(y.a)(Object(y.a)({},e),{},{searchText:t.payload});case"api/issueList/GET_COMMENTS_FOR_ISSUE_REQUESTED":return Object(y.a)(Object(y.a)({},e),{},{commentListLoading:!0,commentList:[],commentListError:!1});case"api/issueList/GET_COMMENTS_FOR_ISSUE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{commentListLoading:!1,commentList:t.payload,commentListError:!1});case"api/issueList/GET_COMMENTS_FOR_ISSUE_ERRORED":return Object(y.a)(Object(y.a)({},e),{},{commentListLoading:!1,commentList:[],commentListError:!0});case"api/issueList/FETCH_SINGLE_ISSUE_REQUESTED":return Object(y.a)(Object(y.a)({},e),{},{issueLoading:!0,issue:{},issueError:!1});case"api/issueList/FETCH_SINGLE_ISSUE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{issueLoading:!1,issue:t.payload,issueError:!1});case"api/issueList/FETCH_SINGLE_ISSUE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{issueLoading:!1,issue:{},issueError:!0});default:return Object(y.a)({},e)}}var Te=function(e){return Object(b.c)({issueList:Ce})},Re=se()(),xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=Object(ae.a)(t={}),a=Object(ee.b)(e),r=Object(b.e)(Te(),t,Object(b.d)(Object(b.a)(s,a)));return s.run(Ie),r}(Re,{});c.a.render(n.a.createElement(f.a,{store:xe},n.a.createElement(ee.a,{history:Re},n.a.createElement($,null))),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.89bcf83b.chunk.js.map