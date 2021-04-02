const webRoute = (app) => {
    app.get('/',(req,res) => {
        res.render('Deshboard/index')
    })
}

module.exports = webRoute