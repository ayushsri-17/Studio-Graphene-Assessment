const Task = require("../models/Task")

// 1. Define the function with a clear name
const createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required",
            })
        }

        const task = await Task.create({
            title,
            description,
            dueDate,
        })
        res.status(201).json(task)

    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const getTasks = async(req, res)=>{
    try{
        const tasks = await Task.find().sort({createdAt:-1})
        res.status(200).json(tasks)
    }catch(error){   
        res.status(500).json({
            message:error.message,
        })
    }       
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            })
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true}
        )

        res.status(200).json(updatedTask)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteTask = async (req, res)=>{
    try{
        const {id} = req.params
        const deletedTask = await Task.findByIdAndDelete(id)

        if(!deletedTask){
            return res.status(404).json({
                message:"Task not found",
            })
        }
        res.status(200).json({
            message:"Task deleted successfully",
        })
    } catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}


module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,

}