const helloController=require('../controllers/helloController');
const userController=require('../controllers/userController');

module.exports= (app)=>{
   app.get('/sayHello',helloController.sayHello);
   app.post('/addUser',userController.addUser);
}
