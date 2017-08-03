var jsonrepo = require('../src/json/bugs.json');
var bugs = jsonrepo.bugs;
var filters = require('../src/funcs/search.jsx');

describe('The type filter', function() {
  it('can filter for issues', function() {
    expect(filters.typeFilter(bugs, ['issues']).length).toBe(2);
    filters.typeFilter(bugs, ['issues']).forEach(element => {
      expect(element.issueId.search(/ISSUE/)).not.toBe(-1);
    });
  });

  it('or for bugs', function() {
    expect(filters.typeFilter(bugs, ['bugs']).length).toBe(4);
    filters.typeFilter(bugs, ['bugs']).forEach(element => {
      expect(element.issueId.search(/BUG/)).not.toBe(-1);
    });
  });
  it('or for both', function() {
    expect(filters.typeFilter(bugs, []).length).toBe(6);
    expect(filters.typeFilter(bugs, ['issues', 'bugs']).length).toBe(6);
    expect(filters.typeFilter(bugs, ['bugs', 'issues']).length).toBe(6);
  });
});

describe('The status filter', function() {
  it('can filter for the status of issues, such as TODO', function() {
    expect(filters.statusFilter(bugs, ['todo']).length).toBe(3);
    filters.statusFilter(bugs, ['todo']).forEach(element => {
      expect(element.status.search(/TO DO/)).not.toBe(-1);
    });
  });

  it('or IN PROGRESS', function() {
    expect(filters.statusFilter(bugs, ['inprogress']).length).toBe(1);
    filters.statusFilter(bugs, ['inprogress']).forEach(element => {
      expect(element.status.search(/IN PROGRESS/)).not.toBe(-1);
    });
  });

  it('or IN TEST', function() {
    expect(filters.statusFilter(bugs, ['intest']).length).toBe(1);
    filters.statusFilter(bugs, ['intest']).forEach(element => {
      expect(element.status.search(/IN TEST/)).not.toBe(-1);
    });
  });

  it('or IN REVIEW', function() {
    expect(filters.statusFilter(bugs, ['inreview']).length).toBe(1);
    filters.statusFilter(bugs, ['inreview']).forEach(element => {
      expect(element.status.search(/IN REVIEW/)).not.toBe(-1);
    });
  });
  
  it('or IN DEMO', function() {
    expect(filters.statusFilter(bugs, ['indemo']).length).toBe(0);
    filters.statusFilter(bugs, ['indemo']).forEach(element => {
      expect(element.status.search(/IN DEMO/)).not.toBe(-1);
    });
  });

  it('or DONE', function() {
    expect(filters.statusFilter(bugs, ['done']).length).toBe(0);
    filters.statusFilter(bugs, ['done']).forEach(element => {
      expect(element.status.search(/DONE/)).not.toBe(-1);
    });
  });

  it('or some combination of those', function() {
    expect(filters.statusFilter(bugs, ['done', 'inprogress', 'todo']).length).toBe(4);
  })

  it('or none at all (which shows all of them)', function() {
    expect(filters.statusFilter(bugs, []).length).toBe(6);
  });
});

describe('The priority filter', function() {
  it('can filter only high priority issues', function() {
    expect(filters.priorityFilter(bugs, ['hi']).length).toBe(3);
    filters.priorityFilter(bugs, ['hi']).forEach(element => {
      expect(element.highPriority.search(/T/)).not.toBe(-1);
    });
  });

  it ('can filter only low priority issues', function() {
    expect(filters.priorityFilter(bugs, ['lo']).length).toBe(3);
    filters.priorityFilter(bugs, ['lo']).forEach(element => {
      expect(element.highPriority.search(/F/)).not.toBe(-1);
    });
  });

  it ('can filter on both high and low priority issues', function() {
    expect(filters.priorityFilter(bugs, []).length).toBe(6);
    expect(filters.priorityFilter(bugs, ['hi', 'lo']).length).toBe(6);
    expect(filters.priorityFilter(bugs, ['lo', 'hi']).length).toBe(6);
  });
});

describe('The severity filter', function() {

  it('can filter only high severity issues', function() {
    expect(filters.severityFilter(bugs, ['hi']).length).toBe(0);
    filters.severityFilter(bugs, ['hi']).forEach(element => {
      expect(element.severity.search(/HIGH/)).not.toBe(-1);
    });
  });

  it('can filter only medium severity issues', function() {
    expect(filters.severityFilter(bugs, ['med']).length).toBe(4);
    filters.severityFilter(bugs, ['hi']).forEach(element => {
      expect(element.severity.search(/MEDIUM/)).not.toBe(-1);
    });
  });

  it('can filter only low severity issues', function() {
    expect(filters.severityFilter(bugs, ['lo']).length).toBe(2);
    filters.severityFilter(bugs, ['lo']).forEach(element => {
      expect(element.severity.search(/LOW/)).not.toBe(-1);
    });
  });

  it('can filter high and low severity issues', function() {
    expect(filters.severityFilter(bugs, ['hi', 'lo']).length).toBe(2);
  });

  it('can filter high and medium severity issues', function() {
    expect(filters.severityFilter(bugs, ['hi', 'med']).length).toBe(4);
  });

  it('can filter medium and low severity issues', function() {
    expect(filters.severityFilter(bugs, ['med', 'lo']).length).toBe(6);
  });

  it('can filter all severity issues', function() {
    expect(filters.severityFilter(bugs, ['med', 'lo', 'hi']).length).toBe(6);
  });

  it('can filter all severity issues', function() {
    expect(filters.severityFilter(bugs, []).length).toBe(6);
  });
});

describe('The summary filter', function() {

  it('can search for a word in the summary', function() {
    expect(filters.summaryFilter(bugs, ['pool']).length).toBe(1);
    filters.summaryFilter(bugs, ['pool']).forEach(element => {
      expect(element.summary.search(/pool/)).not.toBe(-1);
    });
  });

  it ('can search for multiple words', function() {
    expect(filters.summaryFilter(bugs, ['can duplicated']).length).toBe(2);
  });

  it ('can search for no words at all', function() {
    expect(filters.summaryFilter(bugs, ['']).length).toBe(6);
  });
});

describe('The description filter', function() {

  it('can search for a word in the description', function() {
    expect(filters.descriptionFilter(bugs, ['the']).length).toBe(6);
    filters.descriptionFilter(bugs, ['the']).forEach(element => {
      expect(element.description.toLowerCase().search(/the/)).not.toBe(-1);
    });
  });

  it ('can search for multiple words', function() {
    expect(filters.descriptionFilter(bugs, ['is and']).length).toBe(2);
  });

  it ('can search for no words at all', function() {
    expect(filters.descriptionFilter(bugs, ['']).length).toBe(6);
  });
});

describe ('The reporter filter', function() {

  it('can search for issues written by a certain user', function() {
    expect(filters.reporterFilter(bugs, ['Ashley']).length).toBe(1);
    filters.reporterFilter(bugs, ['Ashley']).forEach(element => {
      expect(element.reporter.search(/Ashley/)).not.toBe(-1);
    });
  });

  it('can search for issues written by anyone', function() {
    expect(filters.reporterFilter(bugs, []).length).toBe(6);
  });
});

describe ('The assignee filter', function() {

  it('can search for issues assigned to a certain user', function() {
    expect(filters.assigneeFilter(bugs, ['Un-assigned']).length).toBe(4);
    filters.assigneeFilter(bugs, ['Un-assigned']).forEach(element => {
      expect(element.assignedUser.search(/Un-assigned/)).not.toBe(-1);
    });
  });

  it('can search for issues written by anyone', function() {
    expect(filters.assigneeFilter(bugs, []).length).toBe(6);
  });
});
