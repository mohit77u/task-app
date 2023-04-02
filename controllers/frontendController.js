const TaskModel = require('../models/Task');

// home
module.exports.home = async function(req,res){
    TaskModel.find({}, function(err, tasks) {
        if (err) {
            res.send({
                status: false,
                error: err,
            });
        }
        // console.log(tasks);
        res.render('frontend/home', {
            tasks: tasks
        });
    });
}