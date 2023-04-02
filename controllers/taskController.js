const TaskModel = require('../models/Task');
const moment = require('moment');

// create form 
module.exports.createForm = async function(req,res){
    return res.render('frontend/create'); 
}

// create
module.exports.create = async function(req,res){
    const todoTask = new TaskModel({
        title: req.body.title,
        description: req.body.description,
        due_date: moment(req.body.due_date).format("YYYY-MM-DD"),
        category: req.body.category
    });

    try {
        await todoTask.save();
        req.flash('success','Successfully created the task');
        res.redirect("/");
    } catch (err) {
        req.flash('error','Error in creating the new task');
        res.redirect("/");
    }
}

// edit form
module.exports.editForm = async function(req,res){
    var id = req.params.taskId;
    TaskModel.findOne({_id: id}, function(err,task) {
        if (err) {
            console.log("Error in deleting the task from DB");
        }
        console.log(task);

        return res.render('frontend/edit', {
            task: task, 
        }); 
    });
}

// create
module.exports.update = async function(req,res){
    const id = req.params.taskId;
    const data = req.body;
    const task = await TaskModel.findOneAndUpdate({_id: id}).exec();
    
    task.title = data.title;
    task.description = data.description;
    task.due_date = data.due_date;
    task.category = data.category;

    try {
        await task.save();
        req.flash('success','Successfully updated the task');
        res.redirect("/");
    } catch (err) {
        req.flash('error','Error in updating the new task');
        res.redirect("/");
    }
}

// function to delete task
exports.delete = async (req, res) => {
    var id = req.params.taskId;
    // to check the number of tasks to be deleted
    TaskModel.findByIdAndDelete({_id: id}, function(err) {
        if (err) {
            console.log("Error in deleting the task from DB");
        }
    });

    req.flash('error','Successfully deleted the task');
    return res.redirect('back');
   
}