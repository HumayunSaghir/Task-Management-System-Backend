const {Router} = require('express')
const {handleShowHomepage, handleShowProfile, handleShowCreateTaskPage,
        handleShowDashboardPage, handleCreateTask, handleGetAllTasks,
        handleShowSearchById, handleValidateSearchById} = require('../controllers/home')

const router = Router()

router.get('/home', handleShowHomepage)
router.get('/profile', handleShowProfile)
router.get('/createTask', handleShowCreateTaskPage)
router.get('/dashboard', handleShowDashboardPage)
router.post('/handleCreateTask', handleCreateTask)
router.get('/allTasks', handleGetAllTasks)
router.get('/getTaskById', handleShowSearchById)
router.post('/validateSearchById', handleValidateSearchById)

module.exports = router