const BroomController = require('./controllers/BroomController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Broom
    app.get('/brooms', BroomController.index)
    
    app.post('/broom', BroomController.create)
    
    app.put('/broom/:broomId', BroomController.put)
    
    app.delete('/broom/:broomId', BroomController.delete)
    
    app.get('/broom/:broomId', BroomController.show)

}