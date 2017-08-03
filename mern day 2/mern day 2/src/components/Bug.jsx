import React from 'react';

export default class Bug extends React.Component {
  render() {
    return( 
      <div onClick={this.props.onClick} className='mdl-grid mdl-grid--no-spacing mdl-color--grey-400' >
        <div className='bug-cell mdl-cell mdl-cell--1-col mdl-color--grey-300'>
          <p>{this.props.bug.issueId}</p>
        </div>
        <div className='bug-cell mdl-cell mdl-cell--3-col mdl-cell--1-col-phone mdl-color--grey-300'>
          <p>{this.props.bug.summary}</p>
        </div>
        <div className='bug-cell mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone mdl-color--grey-300'>
          <p>{this.props.bug.assignedUser}</p>
        </div>
        <div className='bug-cell mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone mdl-color--grey-300'>
          <p>{this.props.bug.highPriority === 'TRUE' ? 'HIGH' : 'LOW'}</p>
        </div>
        <div className='bug-cell mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone mdl-color--grey-300'>
          <p>{this.props.bug.severity === 'HIGH' ? '   ' : this.props.bug.severity === 'MEDIUM' ? '  ' : ' '}{this.props.bug.severity}</p>
        </div>
        <div className='bug-cell mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone mdl-color--grey-300'>
          <p>{this.props.bug.status}</p>
        </div>
      </div>
    );
  }
}


