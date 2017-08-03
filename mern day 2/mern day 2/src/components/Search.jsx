import React from 'react';
var filters = require('../funcs/search.jsx');

/* ******************************************************** *
 * This handles every search option, so it's a big file     *
 * but most of it is just variations on the same technique. *
 * ******************************************************** */

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  //state holds information about what options have been selected
      bugsTicked:          false,
      issuesTicked:        false,
      todoTicked:          false,
      inprogressTicked:    false,
      inreviewTicked:      false,
      intestTicked:        false,
      indemoTicked:        false,
      doneTicked:          false,
      hipTicked:           false,
      lopTicked:           false,
      hisTicked:           false,
      medsTicked:          false,
      losTicked:           false,
      summaryContent:      '',
      descriptionContent:  '',
      reporterContent:     '',
      assignedUserContent: ''
    };      //functions to change state
    this.handleBugsChange =         this.handleBugsChange.bind(this);
    this.handleIssuesChange =       this.handleIssuesChange.bind(this);
    this.handleToDoChange =         this.handleToDoChange.bind(this);
    this.handleInProgressChange =   this.handleInProgressChange.bind(this);
    this.handleInReviewChange =     this.handleInReviewChange.bind(this);
    this.handleInTestChange =       this.handleInTestChange.bind(this);
    this.handleInDemoChange =       this.handleInDemoChange.bind(this);
    this.handleDoneChange =         this.handleDoneChange.bind(this);
    this.handleHiPChange =          this.handleHiPChange.bind(this);
    this.handleLoPChange =          this.handleLoPChange.bind(this);
    this.handleHiSChange =          this.handleHiSChange.bind(this);
    this.handleMedSChange =         this.handleMedSChange.bind(this);
    this.handleLoSChange =          this.handleLoSChange.bind(this);
    this.handleSummaryChange =      this.handleSummaryChange.bind(this);
    this.handleDescriptionChange =  this.handleDescriptionChange.bind(this);
    this.handleReporterChange =     this.handleReporterChange.bind(this);
    this.handleAssignedUserChange = this.handleAssignedUserChange.bind(this);
    this.filterArray =              this.filterArray.bind(this);
  }
 
  handleBugsChange(event) {
    this.setState({
      bugsTicked: !this.state.bugsTicked 
    });
  }
  handleIssuesChange(event) {
    this.setState({
      issuesTicked: !this.state.issuesTicked
    });
  }
  handleToDoChange(event) {
    this.setState({
      todoTicked: !this.state.todoTicked
    });
  }
  handleInProgressChange(event) {
    this.setState({
      inprogressTicked: !this.state.inprogressTicked
    });
  }
  handleInReviewChange(event) {
    this.setState({ 
      inreviewTicked: !this.state.inreviewTicked
    });
  }
  handleInTestChange(event) {
    this.setState({
      intestTicked: !this.state.intestTicked
    });
  }
  handleInDemoChange(event) {
    this.setState({
      indemoTicked: !this.state.indemoTicked
    });
  }
  handleDoneChange(event) {
    this.setState({
      doneTicked: !this.state.doneTicked
    });
  }
  handleHiPChange(event) {
    this.setState({
      hipTicked: !this.state.hipTicked
    });
  }
  handleLoPChange(event) {
    this.setState({
      lopTicked: !this.state.lopTicked
    });
  }
  handleHiSChange(event) {
    this.setState({
      hisTicked: !this.state.hisTicked
    });
  }
  handleLoSChange(event) {
    this.setState({
      losTicked: !this.state.lostTicked
    });
  }
  handleMedSChange(event) {
    this.setState({
      medsTicked: !this.state.medsTicked
    });
  }
  handleSummaryChange(event) {
    this.setState({
      summaryContent: event.target.value
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      descriptionContent: event.target.value
    });
  }
  handleReporterChange(event) {
    this.setState({
      reporterContent: event.target.value
    });
  }
  handleAssignedUserChange(event) {
    this.setState({
      assignedUserContent: event.target.value
    });
  }

  filterArray(event) {  //create filter info
    var typeFilterInput = this.setupTypeFilter();
    var statusFilterInput = this.setupStatusFilter();
    var priorityFilterInput = this.setupPriorityFilter();
    var severityFilterInput = this.setupSeverityFilter();
    var summaryFilterInput = this.setupSummaryFilter();
    var descriptionFilterInput = this.setupDescriptionFilter();
    var reporterFilterInput = this.setupReporterFilter();
    var assigneeFilterInput = this.setupAssigneeFilter();
          //use info to filter bugs
    var filteredArray = filters.typeFilter(this.props.array, typeFilterInput);
    filteredArray = filters.statusFilter(filteredArray, statusFilterInput);
    filteredArray = filters.priorityFilter(filteredArray, priorityFilterInput);
    filteredArray = filters.severityFilter(filteredArray, severityFilterInput);
    filteredArray = filters.summaryFilter(filteredArray, summaryFilterInput);
    filteredArray = filters.descriptionFilter(filteredArray, descriptionFilterInput);
    filteredArray = filters.reporterFilter(filteredArray, reporterFilterInput);
    filteredArray = filters.assigneeFilter(filteredArray, assigneeFilterInput);
    this.props.filterHandler(filteredArray);
  }

  setupTypeFilter() {
    var typeArray = [];
    if (this.state.bugsTicked) typeArray.push('bugs');
    if (this.state.issuesTicked) typeArray.push('issues');
    return typeArray;
  }
  setupStatusFilter() {
    var statusArray = [];
    if (this.state.todoTicked) statusArray.push('todo');
    if (this.state.inprogressTicked) statusArray.push('inprogress');
    if (this.state.inreviewTicked) statusArray.push('inreview');
    if (this.state.intestTicked) statusArray.push('intest');
    if (this.state.indemoTicked) statusArray.push('indemo');
    if (this.state.doneTicked) statusArray.push('done');
    return statusArray;
  }
  setupPriorityFilter() {
    var priorityArray = [];
    if (this.state.hipTicked) priorityArray.push('hi');
    if (this.state.lopTicked) priorityArray.push('lo');
    return priorityArray;
  }
  setupSeverityFilter() {
    var severityArray = [];
    if (this.state.hisTicked) severityArray.push('hi');
    if (this.state.medsTicked) severityArray.push('med');
    if (this.state.losTicked) severityArray.push('lo');
    return severityArray;
  }
  setupSummaryFilter() {
    var summaryArray = [];
    if (this.state.summaryContent.search(/^\s*$/) === -1) summaryArray.push(this.state.summaryContent);
    return summaryArray;
  }
  setupDescriptionFilter() {
    var descriptionArray = [];
    if (this.state.descriptionContent.search(/^\s*$/) === -1) descriptionArray.push(this.state.descriptionContent);
    return descriptionArray;
  }
  setupReporterFilter() {
    var reporterArray = [];
    if (this.state.reporterContent.search(/^\s*$/) === -1) reporterArray.push(this.state.reporterContent);
    return reporterArray;
  }
  setupAssigneeFilter() {
    var assigneeArray = []
    if (this.state.assignedUserContent.search(/^\s*$/) === -1) assigneeArray.push(this.state.assignedUserContent);
    return assigneeArray;
  }
  render() {
    return (
      <div className='mdl-layout mdl-js-layout mdl-grid'>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Issue type</h1>
           <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='bugBox'>
             <input onChange={this.handleBugsChange} type='checkbox' id='bugBox' className='mdl-checkbox__input' />
             <span className='mdl-checkbox__label'>Bugs</span>
           </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='issueBox'>
             <input onChange={this.handleIssuesChange} type='checkbox' id='issueBox' className='mdl-checkbox__input' />
             <span className='mdl-checkbox__label'>Issues</span>
          </label>
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Status</h1>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='toDoBox'>
            <input onChange={this.handleToDoChange} type='checkbox' id='toDoBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>To do</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='inProgressBox'>
            <input onChange={this.handleInProgressChange} type='checkbox' id='inProgressBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>In progress</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='inReviewBox'>
            <input onChange={this.handleInReviewChange} type='checkbox' id='inReviewBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>In review</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='inTestBox'>
            <input onChange={this.handleInTestChange} type='checkbox' id='inTestBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>In test</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='inDemoBox'>
            <input onChange={this.handleInDemoChange} type='checkbox' id='inDemoBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>In demo</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='doneBox'>
            <input onChange={this.handleDoneChange} type='checkbox' id='doneBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>Done</span>
          </label>
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Priority</h1>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='highPBox'>
            <input onChange={this.handleHiPChange} type='checkbox' id='highPBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>High priority</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='lowPBox'>
            <input onChange={this.handleLoPChange} type='checkbox' id='lowPBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>Low priority</span>
          </label>
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Severity</h1>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='highSBox'>
            <input onChange={this.handleHiSChange} type='checkbox' id='highSBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>High severity</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='medSBox'>
            <input onChange={this.handleMedSChange} type='checkbox' id='medSBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>Medium severity</span>
          </label>
          <label className='mdl-cell mdl-checkbox mdl-js-checkbox' htmlFor='lowSBox'>
            <input onChange={this.handleLoSChange} type='checkbox' id='lowSBox' className='mdl-checkbox__input' />
            <span className='mdl-checkbox__label'>Low severity</span>
          </label>
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Summary contains</h1>
          <input onChange={this.handleSummaryChange} placeholder='Enter search terms here' className='mdl-textfield__input' type='text' id='summarySearch' />
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Description contains</h1>
          <input onChange={this.handleDescriptionChange} placeholder='Enter search terms here' className='mdl-textfield__input' type='text' id='descriptionSearch' />
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Reported by</h1>
          <input onChange={this.handleReporterChange} placeholder='Enter name' className='mdl-textfield__input' type='text' id='reporterSearch' />
        </div>
        <div className='mdl-cell'>
          <h1 className='mdl-cell mdl-layout-title'>Assigned to</h1>
          <input onChange={this.handleAssignedUserChange} placeholder='Enter name' className='mdl-textfield__input' type='text' id='assignedUserSearch' />
        </div>
        <div className='mdl-cell'></div>
        <button onClick={this.filterArray} className='mdl-cell mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Filter</button>
      </div>
    );
  }
}
