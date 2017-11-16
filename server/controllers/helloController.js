const helloController= module.exports;

helloController.sayHello=(req,res)=>{
    res.send('I said hello to the world');
}
