import React from 'react';

export default class BugDetails extends React.Component {

  render() {
    return (
      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
          <h1 className='mdl-layout-title'>Summary</h1>
          <p>{this.props.bug.summary}</p>
          <h1 className='mdl-layout-title'>Status</h1>
          <p>{this.props.bug.status}</p>
        </div>
        <div className='mdl-cell mdl-cell--2-col-tablet mdl-cell-1-col-phone'>
          <h1 className='mdl-layout-title'>Issue ID:</h1>
          {this.props.bug.issueId}
          <h1 className='mdl-layout-title'>Date created:</h1>
          {this.props.bug.dateCreated}
        </div>
        <div className='mdl-cell mdl-cell--12-col'>
          <h1 className='mdl-layout-title'>Description</h1>
          <div className='mdl-cell--12-col' style={{border: "solid black 2px"}}>{this.props.bug.description}</div>
        </div>
        <div className='mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
          <h1 className='mdl-layout-title'>Priority</h1>
          <p>{this.props.bug.highPriority === 'TRUE' ? 'High' : 'Low'}</p>
          <h1 className='mdl-layout-title'>Severity</h1>
          <p>{this.props.bug.severity}</p>
          <h1 className='mdl-layout-title'>Assigned User</h1>
          <p>{this.props.bug.assignedUser}</p>
          <h1 className='mdl-layout-title'>Reporter</h1>
          <p>{this.props.bug.reporter}</p>
        </div>
        <div className='mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone mdl-cell--stretch'>
          <h1 className='mdl-layout-title'>Actions</h1>
          <div style={{overflowY: scroll, height: "100%", border: "2px solid black"}}>
            {this.props.bug.actions.map(action => 
              <div className='mdl-color--grey-400 mdl-grid' style={{margin: "3px 3px 3px 3px"}} key={action.dateCreated}>
                <div className='mdl-cell mdl-cell--8-col mdl-cell--4-col-tablet'>{action.action}</div>
                <div className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet'>{action.user}</div>
                <div className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet'>{action.dateCreated}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
