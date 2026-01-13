const {Router} = require('express')
const {handleShowHomepage, handleShowProfile, handleShowCreateTaskPage, handleShowDashboardPage} = require('../controllers/home')

const router = Router()

router.get('/home', handleShowHomepage)
router.get('/profile', handleShowProfile)
router.get('/createTask', handleShowCreateTaskPage)
router.get('/dashboard', handleShowDashboardPage)

module.exports = router