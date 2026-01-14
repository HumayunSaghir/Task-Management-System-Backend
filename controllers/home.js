const taskModel = require('../models/tasks')

function handleShowHomepage(req, res){
    return res.status(200).render('homepage', {
        user : req.user,
    })
}

function handleShowProfile(req, res){
    return res.status(200).render('profile', {
        user : req.user,
    })
}

function handleShowCreateTaskPage(req, res){
    return res.status(200).render('createTask', {
        user : req.user,
    })
}

function handleShowDashboardPage(req, res){
    return res.status(200).render('dashboard', {
        user : req.user,
    })
}

async function handleCreateTask(req, res){
    const {title, description, status, priority} = req.body

    const createdTask = await taskModel.create({
        title : title,
        description : description,
        status : status,
        priority : priority,
        createdBy : req.user._id,
    })

    return res.status(201).render('homepage', {
        user : req.user,
        message : 'Task Added!',
    })
}

async function handleGetAllTasks(req, res){
    const userId = req.user._id
    const allTasks = await taskModel.find({createdBy : userId})
    return res.status(200).render('allTasks', {
        data : allTasks,
    })
}

module.exports = {
    handleShowHomepage,
    handleShowProfile,
    handleShowCreateTaskPage,
    handleShowDashboardPage,
    handleCreateTask,
    handleGetAllTasks,
}