const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema/todoSchema');
const router = express.Router();



const Todo = new mongoose.model('Todo',todoSchema)


const errHand = (req, res, err) => {
    err ? res.status(500).json({
        err: "Server error"
    }) : res.status(200).json({
        message:"success"
    })
}
//get all todos
router.get('/', async (req, res) => {
    await Todo.find({status:"active"}).select({
        _id:0
    }).exec((err ,data) => {
        res.status(200).json({
					message: "succes",
					result: data,
				});
    })
    
})

//get a todo
router.get('/:id', async (req, res) => {

})

//make  todos
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);

    await newTodo.save(err => {
        err ? res.status(500).json({
            err:"There was a server side error"
        }) : res.status(200).json({
            message:"Todo was inserted succesfully"
        })
    })
})
//post all todos
router.post('/all', async (req, res) => {
    await Todo.insertMany(req.body, err => {
        err? res.status(500).json({
							err: "There was a server side error",
					})
					: res.status(200).json({
							message: "Todo was inserted succesfully",
					});
    })
})

//update  a  todo
router.put('/:id', async (req, res) => {
    await Todo.updateOne({ _id: req.params.id }, {
        $set: {
            status: "inactive"
        }
    },err => errHand(req,res,err))
})

//delete  a todo
router.delete('/:id', async (req, res) => {
    await Todo.deleteOne({_id: req.params.id},err => errHand(req,res,err))
})

module.exports = router;