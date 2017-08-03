import React from 'react';
import Headings from './Headings.jsx';
import bugs from '../json/bugs.json';
import Bug from './Bug.jsx'
import Modal from 'react-modal';
import BugDetails from './BugDetails.jsx';
import Search from './Search.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs:            bugs.bugs,
      filteredBugs:    bugs.bugs,
      bugModalOpen:    false,
      addModalOpen:    false,
      searchModalOpen: false,
      chosenBug:       [],
      sortCriterion:   'issueId',
      desc:            false
    };
    this.closeBugModal =    this.closeBugModal.bind(this);
    this.openSearchModal =  this.openSearchModal.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
  }
  componentWillMount() {    //initial sort
    this.bugSort(this.state.sortCriterion, false);
  }
  bugModalPrepare(inpBug) {
    this.setState({
      chosenBug: inpBug,
      bugModalOpen: true
    });
  }
  closeBugModal() {
    this.setState({
      bugModalOpen: false
    });
  }
  openSearchModal() {
    this.setState({
      searchModalOpen: true
    });
  }
  closeSearchModal() {
    this.setState({
      searchModalOpen: false
    });
  }


  bugSort(criterion, desc) { //Monster of a Schwartzian transform.  Basically, converts each element to a key-value pair, with the sort criterion being the key, then sorts based on the key.  
    this.setState({
      filteredBugs: this.state.filteredBugs.map(bug => [bug, bug[criterion]])
                           .sort((a, b) => (a[1] < b[1]) ?
                                              -1 * (desc ? -1 : 1)
                                            :
                                              (a[1] > b[1]) ?
                                                1 * (desc ? -1 : 1)
                                              :
                                              0)
                           .map(bug => bug[0])});
  }

  handleSortChange(criterion, desc) { //handles callback from Headings component
    this.setState({
      sortCriterion: criterion,
      desc: desc
    });
    this.bugSort(criterion, desc);
  }

  handleFilterChange(newArray) { //handles callback from Search component
    this.setState({
      filteredBugs: newArray
    });
  }

  render() {
    return (
      <div className='mdl-layout mdl-js-layout'>
        <div className='mdl-layout__content'>
        <div className='mdl-grid'>
          <div className='mdl-layout-spacer'></div>
          <button className='mdl-button mdl-js-button mdl-button--raised' onClick={() => this.openSearchModal()}>Search</button>
          <Modal      
            isOpen={this.state.searchModalOpen}
            onRequestClose={this.closeSearchModal}
            contentLabel='searchModal'
            style={{overlay: {zIndex: 98}}}
          >
            <Search array={this.state.bugs} filterHandler={this.handleFilterChange.bind(this)} />
          </Modal>
        </div>      
          <Headings sortCriterion={this.state.sortCriterion} desc={this.state.desc} sortHandler={this.handleSortChange.bind(this)} />
          {this.state.filteredBugs.map(bug =>
            <Bug onClick={() => this.bugModalPrepare(bug)} bug={bug} key={bug.id}/>
          )}
          <Modal 
            isOpen={this.state.bugModalOpen}
            onRequestClose={this.closeBugModal}
            contentLabel='bugModal'
            style={{overlay: {zIndex: 99}}}
          >
            <BugDetails bug={this.state.chosenBug} />
          </Modal>
        </div>
      </div>
    );
  }
}
