const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        validate(value) {
            if (value < 0) {
                throw new Error('Completed must be a Boolean')
            }
        }
    }
})

const Task = mongoose.model('tasks', taskSchema)

module.exports = Task
