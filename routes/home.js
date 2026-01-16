const {Router} = require('express')
const {handleShowHomepage, handleShowProfile, handleShowCreateTaskPage,
        handleShowDashboardPage, handleCreateTask, handleGetAllTasks,
        handleShowSearchById, handleValidateSearchById, handleShowEditTaskPage,
        handleValidateEditTask, handleTaskDeletion} = require('../controllers/home')

const router = Router()

router.get('/', handleShowHomepage)
router.get('/profile', handleShowProfile)
router.get('/createTask', handleShowCreateTaskPage)
router.get('/dashboard', handleShowDashboardPage)
router.post('/handleCreateTask', handleCreateTask)
router.get('/allTasks', handleGetAllTasks)
router.get('/getTaskById', handleShowSearchById)
router.post('/validateSearchById', handleValidateSearchById)
router.get('/editTask/:_id', handleShowEditTaskPage)
router.post('/validateEditTask/:_id', handleValidateEditTask)
router.get('/deleteTask/:_id', handleTaskDeletion)

module.exports = router