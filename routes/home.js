const {Router} = require('express')
const {handleShowHomepage, handleShowProfile, handleShowCreateTaskPage, handleShowDashboardPage, handleCreateTask, handleGetAllTasks} = require('../controllers/home')

const router = Router()

router.get('/home', handleShowHomepage)
router.get('/profile', handleShowProfile)
router.get('/createTask', handleShowCreateTaskPage)
router.get('/dashboard', handleShowDashboardPage)
router.post('/handleCreateTask', handleCreateTask)
router.get('/allTasks', handleGetAllTasks)

module.exports = router