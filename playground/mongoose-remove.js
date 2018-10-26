const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: "5bd290130bbff5a30ac944e5"}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5bd290130bbff5a30ac944e5').then((todo) => {
  console.log(todo);
});
