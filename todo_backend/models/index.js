const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo-app',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");