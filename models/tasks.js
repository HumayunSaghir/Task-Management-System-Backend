const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title : {
        type : String,
        required : true,
    },

    description : {
        type : String,
    },

    status : {
        type : String,
        required : true,
    },

    priority : {
        type : String,
        required : true,
    },

    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'users',
    }

}, {timestamps : true})

const taskModel = new model('tasks', taskSchema)

module.exports = taskModel