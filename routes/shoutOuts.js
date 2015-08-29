var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
    console.log('test');
    var file = path.join(__dirname,'../models/shoutOuts.json')
    var id = req.params.id;
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var shoutOuts = obj;

            obj.forEach(function(student){
                if(student.studentId == id){
                    shoutOuts = student;
                }
            });

            res.json(shoutOuts);
        }
    })

});

module.exports = router;
