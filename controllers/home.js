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

module.exports = {
    handleShowHomepage,
    handleShowProfile,
    handleShowCreateTaskPage,
    handleShowDashboardPage,
}