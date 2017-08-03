/******************* *
 * typeFilter        *
 * statusFilter      *
 * priorityFilter    *
 * severityFilter    *
 * summaryFilter     *
 * descriptionFilter *
 * reporterFilter    *
 * assigneeFilter    *
 * ***************** */


function typeFilter(jsonArray, types) {
  if (types.indexOf('issues') === -1 && types.indexOf('bugs') === -1) {
    return jsonArray;
  } else if (types.indexOf('issues') !== -1 && types.indexOf('bugs') !== -1) {
    return jsonArray;
  } else if (types.indexOf('issues') !== -1) {
    return jsonArray.filter(element => element.issueId.search(/ISSUE/) !== -1);
  } else {
    return jsonArray.filter(element => element.issueId.search(/BUG/) !== -1);
  }
};

function statusFilter(jsonArray, statuses) {
  if (statuses.length === 0) {
    return jsonArray;
  } else {
    var outputArray = [];
    if (statuses.indexOf('todo') !== -1) {
      jsonArray.filter(element => element.status.search(/TO DO/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (statuses.indexOf('inprogress') !== -1) {
      jsonArray.filter(element => element.status.search(/IN PROGRESS/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (statuses.indexOf('intest') !== -1) {
      jsonArray.filter(element => element.status.search(/IN TEST/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (statuses.indexOf('inreview') !== -1) {
      jsonArray.filter(element => element.status.search(/IN REVIEW/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (statuses.indexOf('indemo') !== -1) {
      jsonArray.filter(element => element.status.search(/INDEMO/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (statuses.indexOf('done') !== -1) {
      jsonArray.filter(element => element.status.search(/DONE/) !== -1).forEach(elem => outputArray.push(elem));
    }
    return outputArray;
  }
};

function priorityFilter(jsonArray, priorities) {
  if (priorities.indexOf('hi') === -1 && priorities.indexOf('lo') === -1) {
    return jsonArray;
  } else if (priorities.indexOf('hi') !== -1 && priorities.indexOf('lo') !== -1) {
    return jsonArray;
  } else if (priorities.indexOf('hi') !== -1) {
    return jsonArray.filter(element => element.highPriority.search(/T/) !== -1);
  } else {
    return jsonArray.filter(element => element.highPriority.search(/F/) !== -1);
  }
};

function severityFilter(jsonArray, severities) {
  if (severities.length === 0) {
    return jsonArray;
  } else {
    var outputArray = [];
    if (severities.indexOf('lo') !== -1) {
      jsonArray.filter(element => element.severity.search(/LOW/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (severities.indexOf('med') !== -1) {
      jsonArray.filter(element => element.severity.search(/MED/) !== -1).forEach(elem => outputArray.push(elem));
    }
    if (severities.indexOf('hi') !== -1) {
      jsonArray.filter(element => element.severity.search(/HIGH/) !== -1).forEach(elem => outputArray.push(elem));
    }
    return outputArray;
  }
};

function summaryFilter(jsonArray, searchParams) {
  if (searchParams.length == 0) {
    return jsonArray;
  }
  let searchList = searchParams[0].split(/\s+/);
  if (searchList.length === 0) {
    return jsonArray;
  } else {
    var outputArray = [];
    jsonArray.forEach(element => {
      let areAllIn = true;
      searchList.forEach(param => {
        if (element.summary.toLowerCase().search(new RegExp(param.toLowerCase())) === -1) {
          areAllIn = false;
        }
      });
      if (areAllIn === true) {
        outputArray.push(element);
      }
    });
    return outputArray;
  }
}
      

function descriptionFilter(jsonArray, searchParams) {
  if (searchParams.length == 0) {
    return jsonArray;
  }
  let searchList = searchParams[0].split(/\s+/);
  if (searchList.length === 0) {
    return jsonArray;
  } else {
    var outputArray = [];
    jsonArray.forEach(element => {
      let areAllIn = true;
      searchList.forEach(param => {
        if (element.description.toLowerCase().search(new RegExp(param.toLowerCase())) === -1) {
          areAllIn = false;
        }
      });
      if (areAllIn === true) {
        outputArray.push(element);
      }
    });
    return outputArray;
  }
}

function reporterFilter(jsonArray, name) {
  if (name.length === 0) {
    return jsonArray;
  } else {
    return jsonArray.filter(element => element.reporter === name[0]);
  }
}

function assigneeFilter(jsonArray, name) {
  if (name.length === 0) {
    return jsonArray;
  } else {
    return jsonArray.filter(element => element.assignedUser === name[0]);
  }
}

module.exports.typeFilter =        typeFilter;
module.exports.statusFilter =      statusFilter;
module.exports.priorityFilter =    priorityFilter;
module.exports.severityFilter =    severityFilter;
module.exports.summaryFilter =     summaryFilter;
module.exports.descriptionFilter = descriptionFilter;
module.exports.reporterFilter =    reporterFilter;
module.exports.assigneeFilter =    assigneeFilter;
