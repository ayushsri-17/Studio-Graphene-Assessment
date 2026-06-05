const express =  require("express")
const router = express.Router()
const Task = require("../models/Task")

router.post("/", async (req, res)=>{
    try{
        const{title, description, dueDate} = req.body;

        if(!title){
            return res.status(400).json({
                message:"Title is required",
            })
        }

        const task = await Task.create({
            title,
            description,
            dueDate,
        })
        res.status(201).json(task)

    }catch(error){
        res.status(400).json({
            message:error.message,
        })

    }
})

module.exports = router;