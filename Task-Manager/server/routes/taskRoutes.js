const express = require("express")
const router = express.Router()

const { 
       createTask, 
       getTasks,
       updateTask,
       deleteTask,
       addJournalEntry,
      } = require("../controllers/taskController")

router.post("/", createTask)
router.get("/", getTasks)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)
router.post("/:id/journal", addJournalEntry)

module.exports = router;