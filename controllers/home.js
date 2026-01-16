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

module.exports = {
    handleShowHomepage,
    handleShowProfile,
    handleShowCreateTaskPage,
    handleShowDashboardPage,
    handleCreateTask,
    handleGetAllTasks,
    handleShowSearchById,
    handleValidateSearchById
}