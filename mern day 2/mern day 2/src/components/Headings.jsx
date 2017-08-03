import React from 'react';

export default class Headings extends React.Component {
    //sends sorted list to app
  handleSortRequest(criterion) {
    if (this.props.sortCriterion === criterion) {
      if (this.props.desc === true) {
        this.props.sortHandler(criterion, false);
      } else {
        this.props.sortHandler(criterion, true);
      }
    } else {
      this.props.sortHandler(criterion, false);
    }
  }
  
  render() {
    return (
      <div className='mdl-grid mdl-grid--no-spacing' >
        <div className='mdl-cell mdl-cell--1-col mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('issueId', true)}>
          IssueID {this.props.sortCriterion === 'issueId' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
        <div className='mdl-cell mdl-cell--3-col mdl-cell--1-col-phone mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('summary', true)}>
          Summary {this.props.sortCriterion === 'summary' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('reporter', true)}>
          Assigned User {this.props.sortCriterion === 'assignedUser' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('highPriority', true)}>
          Priority {this.props.sortCriterion === 'highPriority' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('severity', true)}>
          Severity {this.props.sortCriterion === 'severity' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone mdl-color--grey-800 mdl-color-text--white' onClick={() => this.handleSortRequest('status', true)}>
          Status {this.props.sortCriterion === 'status' ? this.props.desc === false ? '▴' : '▾' : '' }
        </div>
      </div>
    );
  }
}
