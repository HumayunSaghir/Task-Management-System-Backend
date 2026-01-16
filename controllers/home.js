const taskModel = require('../models/tasks')

// show homepage
function handleShowHomepage(req, res){
    return res.status(200).render('homepage', {
        user : req.user,
    })
}

// show profile
function handleShowProfile(req, res){
    return res.status(200).render('profile', {
        user : req.user,
    })
}

// show create task page
function handleShowCreateTaskPage(req, res){
    return res.status(200).render('createTask', {
        user : req.user,
    })
}

// show dashboard page
function handleShowDashboardPage(req, res){
    return res.status(200).render('dashboard', {
        user : req.user,
    })
}

// create task
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

// get all tasks
async function handleGetAllTasks(req, res){
    const userId = req.user._id
    const allTasks = await taskModel.find({createdBy : userId})
    
    return res.status(200).render('allTasks', {
        data : allTasks,
    })
}

// show search page.
function handleShowSearchById(req, res){
    return res.status(200).render('searchById', {
        user : req.user,
    })
}

// validating search by id
async function handleValidateSearchById(req, res){
    const {reqId} = req.body;

    try{
        const reqTask = await taskModel.findById({_id : reqId});

        // task will be found on valid id.
        return res.status(200).render('searchById', {
            user : req.user,
            data : reqTask,
        })
        
    }
    catch(Exception){
        // incase user enters invalid id error will be thrown so we need to catch it.

        return res.status(404).render('searchById', {
            user : req.user,
            message : 'No such task found!',
        })

    }
}

// show edit task page
function handleShowEditTaskPage(req, res){

    // we are getting id here.

    return res.status(200).render('editTask', {
        user : req.user,
        _id : req.params._id,
    })
}

// handle task editing
async function handleValidateEditTask(req, res){
    // we are getting the id here.
    const _id = req.params._id
    const {title, description, status, priority} = req.body
    
    // fetching the document
    const reqTask = await taskModel.findOne({_id : _id})
    
    // editing the properties
    reqTask.title = title
    reqTask.description = description
    reqTask.status = status
    reqTask.priority = priority

    // saving the document
    await reqTask.save()

    return res.status(200).redirect('/allTasks')

}

// task deletion
async function handleTaskDeletion(req, res){
    // getting the id
    const reqId = req.params._id

    await taskModel.findByIdAndDelete({_id : reqId})

    return res.status(200).redirect('/allTasks')

}

// showing completed tasks
async function handleShowCompletedTask(req, res){
    const reqId = req.user._id

    // fetching all tasks
    const allTasks = await taskModel.find({createdBy : reqId})
    return res.status(200).render('completedTask', {
        data : allTasks,
    })

}

// show pending task
async function handleShowPendingTask(req, res){
    const reqId = req.user._id

    // fetching all tasks
    const allTasks = await taskModel.find({createdBy : reqId})
    return res.status(200).render('pendingTask', {
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
    handleShowSearchById,
    handleValidateSearchById,
    handleShowEditTaskPage,
    handleValidateEditTask,
    handleTaskDeletion,
    handleShowCompletedTask,
    handleShowPendingTask,
}