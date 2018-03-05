const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findByIdAndRemove("5a9d53113ef77e12cc31f49d").then((todo) => {
  console.log(todo);
});
