'use strict';

import Mongoose from 'mongoose';

var Schema = Mongoose.Schema

var BugSchema = new Schema({
  _id:          Number,
  issueId:      String,
  dateCreated:  Date,
  summary:      String,
  description:  String,
  highPriority: {
    type:         String,
    enum:         ['TRUE','FALSE']
  },
  severity:     {
    type:         String,
    enum:         ['HIGH','MEDIUM','LOW']
  },
  reporter:     String,
  assignedUser: String,
  actions:      [ActionSchema],
  status:       {
    type:         String,
    enum:         ['TO DO', 'IN PROGRESS', 'IN REVIEW', 'IN TEST', 'IN DEMO', 'DONE']
  }
});

var ActionSchema = new Schema({
  user:        String,
  dateCreated: Date,
  action:      String
});
