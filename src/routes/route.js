const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name/:age', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    //(req.params) is stores an object like key value pairs
    // here (req.params)
    // http://localhost:3000/student-details/sid/27
    // storing the dynamic name input iside an object with :name and :age as key and the given name and given age as value
    let studentName = requestParams.name
    let studentAge = requestParams.age
    console.log('Name of the student is ', studentName)
    
    let studentDetails = studentName + " " + studentAge 
    res.send(studentDetails)
});

module.exports = router;