const {Schema, model} = require('mongoose')

const taskSchema = new Schema({

})

const taskModel = new model('tasks', taskSchema)

module.exports = taskModel