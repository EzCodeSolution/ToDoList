const authRoute = (app) => {
    app.get('/login',(req,res) => {
        res.render('Auth/login')
    })
    app.get('/register',(req,res)=>{
        res.render('Auth/register')
    })
}

module.exports = authRoute