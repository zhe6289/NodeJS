const express = require('express')
const Task = require('../models/task')
const { Mongoose } = require('mongoose')
const { findById } = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).send(task)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const userID = await Task.findById(_id)
        if (!userID) {
            res.send('Wrong id input please try again')
        }
        res.send(userID)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/task/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid updates"})
    }
    try {
        const task = await Task.findById(req.params.id)

        updates.forEach((update) => {
            task[update] = req.body[update]
        })
        await task.save()
        
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send({ Error: "No task has found!" })
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router